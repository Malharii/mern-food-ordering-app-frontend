// import { SearchState } from "@/pages/SearchPage";
import { RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const useGetRestaurant = (restaurantId?: string) => {
//   const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
//     const response = await fetch(`${API_BASE_URL}/api/restaurant/${restaurantId}`);

//     if (!response.ok) {
//       throw new Error("Failed to get restaurant");
//     }

//     return response.json();
//   };

//   const { data: restaurant, isLoading } = useQuery(
//     "fetchRestaurant",
//     getRestaurantByIdRequest,
//     {
//       enabled: !!restaurantId,
//     }
//   );

//   return { restaurant, isLoading };
// };

export const useSearchRestaurants = (city?: string) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    // const params = new URLSearchParams();
    // params.set("searchQuery",.searchQuery);
    // params.set("page", ());
    // params.set("selectedCuisines", (","));
    // params.set("sortOption", searchState.sortOption);

    const response = await fetch(`${API_BASE_URL}/api/restaurant/search/${city}`);

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants"],
    createSearchRequest,
    { enabled: !!city }
  );

  return {
    results,
    isLoading,
  };
};
