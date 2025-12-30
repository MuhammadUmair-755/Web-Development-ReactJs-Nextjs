"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must Logged in");
  }
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  // best practice is to suppose that data is unsafe
  const nationalIDRegex = /^[a-zA-Z0-9]{6,12}$/;
  if (!nationalIDRegex.test(nationalID))
    throw new Error("Please provide  a valid national id");
  const updateData = { nationality, countryFlag, nationalID };
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestid);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }
  revalidatePath("/account/profile"); // revelidating the data for this path
}
export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestid);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to delete this booking`");
  }
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");
  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  
  const bookingId = Number(formData.get("bookingId")); 
  const guestBookings = await getBookings(session.user.guestid);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to update this booking`");
  }
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {    
    throw new Error("Booking could not be updated");
  }
  revalidatePath('/account/reservations');
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect('/account/reservations');
}

export async function createBooking(bookingData,formData){
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  
  const newBooking = {
    ...bookingData,
    guestId: session.user.guestid,
    numGuests: formData.get("numGuests"),
    observations: formData.get("observations").slice(0,1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed"
  }
  const { error } = await supabase
    .from('bookings')
    .insert([newBooking])
    // So that the newly created object gets returned!
    
  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect('/cabins/thankyou');
}