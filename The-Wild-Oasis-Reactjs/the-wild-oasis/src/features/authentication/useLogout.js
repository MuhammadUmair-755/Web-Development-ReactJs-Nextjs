import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate: logout, isLoading} = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
        queryClient.removeQueries(); // clear all cached data
        navigate("/login", {replace: true}); // replace true to prevent going back to protected page
        }
    });

    return {logout, isLoading};
}