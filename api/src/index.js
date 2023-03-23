import server from "./config/app";
import "./config/database";

server.listen(3001, () => {
  console.log(`your application run : http://localhost:3001`);
});
