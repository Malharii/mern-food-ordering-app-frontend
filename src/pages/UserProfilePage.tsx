import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUdateLoading } = useUpdateMyUser();

  if (isGetLoading) return <span>Loading...</span>; //  show loading indicator
  if (!currentUser) {
    return <span>Unable to load user profile </span>;
  }
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUdateLoading}
    />
  );
};

export default UserProfilePage;
