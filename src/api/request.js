import axios from "axios";
import { Message } from "element-ui";
const request = axios.create();

request.interceptors.response.use((res) => {
  if (!res.data.status === 200) {
    return res.data;
  }
  const data = res.data;
  if (data.code) {
    if (!data.rowtotal) {
      return null;
    }
    return {
      total: data.rowtotal,
      data: data.data,
    };
  } else {
    console.warn(data.data, "需要改为弹窗");
    Message({
      message: data.data,
      type: "warning",
    });
  }
});

export default request;
