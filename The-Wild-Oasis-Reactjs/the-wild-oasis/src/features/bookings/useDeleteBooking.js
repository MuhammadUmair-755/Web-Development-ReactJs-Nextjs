import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking(){
     const queryClient = useQueryClient();
    //  const bookingId = useParams();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn:  deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({
        // invalidating manually to refetch the data after deletion
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return {isDeleting, deleteBooking};
}

