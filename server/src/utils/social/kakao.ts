import axios from "axios";

export async function getKakaoUser(token: string) {
  const res = await axios.get<KakaoUser>("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}

type KakaoUser = {
  id: number;
  kakao_account: {
    email: string | undefined;
  };
};
