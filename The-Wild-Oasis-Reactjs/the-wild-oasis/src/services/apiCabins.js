import supabase, { supabaseUrl } from "./supabase";

export async function createEditCabin(newCabin, id) {
  // console.log(newCabin)
  const hasImagePath = Boolean(
    typeof newCabin.image === "string" &&
    newCabin.image?.startsWith?.(supabaseUrl)
  );

  // 1. Create a unique image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // 2. Construct the URL (Make sure this path matches your Supabase bucket structure)
  // Standard format: https://[project].supabase.co/storage/v1/object/public/[bucket]/[name]

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  // A) Create
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]); // creating in an array
  }

  //b) Edit
  if (id) {
    query = query
      .update({ ...newCabin, image: imagePath }) // not an array
      .eq("id", id);      
  }
  const { data, error } = await query.select().single();
  // 3. Create the cabin first

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  if(hasImagePath) return data;
  // 4. Upload the image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 5. Handle Image Upload Error
  if (storageError) {
    // FIX 3: Accessed data[0] because 'select' returns an array
    await supabase.from("cabins").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the Cabin was not created"
    );
  }

  return data;
}

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
