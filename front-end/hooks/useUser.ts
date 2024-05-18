import { getUser } from "@/api/secured";
import { UserType } from "@/interfaces/UserType";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const response = await getUser();
      setUser(response);
    };

    fetch();
  }, []);

  return { user };
};
