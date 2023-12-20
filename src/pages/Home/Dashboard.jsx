import { Box } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
      adipisci voluptatem voluptatibus sit neque voluptatum velit officiis, sint
      enim, voluptas, excepturi iusto laboriosam consequuntur molestias
      doloremque praesentium aperiam dolores dolorum. Ducimus modi magnam
      corrupti, quia minima magni impedit ipsa ad molestias quae, non recusandae
      nobis harum voluptatum quo mollitia excepturi exercitationem. Laborum
      debitis quis cupiditate magnam maxime unde! Asperiores animi eveniet
      voluptatem magnam nesciunt? Dignissimos earum magnam illo reprehenderit,
      recusandae cumque, vel corporis obcaecati eos est autem nemo aut
      praesentium? Neque rerum reprehenderit pariatur et magnam eum repudiandae,
      dolorum in, qui cumque numquam accusamus nostrum dolorem deleniti saepe
      unde sequi quibusdam doloremque! Exercitationem rem nam omnis, doloribus
      vitae veritatis velit sint labore voluptates quia aut tempore dolore
      quidem necessitatibus, esse quo dicta? Eaque reiciendis repellat, quidem
      deleniti animi accusamus accusantium unde odio illo optio blanditiis
      nobis, placeat maxime voluptas cumque omnis repudiandae neque. Dolores
      ipsam eius ducimus labore veritatis cum nihil officiis sequi! Quidem dolor
      optio libero harum et minus quasi impedit, magnam corrupti. Illo
      exercitationem accusamus, quisquam quod possimus voluptates! Delectus
      nesciunt repellendus culpa facere facilis obcaecati quo laboriosam nihil,
      quasi dolores. Veniam quod repellat, id provident aperiam ex laboriosam
      natus fugit possimus beatae quos odit a debitis nostrum exercitationem
      perspiciatis minus dolor eveniet numquam reiciendis vitae minima eaque
      ducimus! Id numquam excepturi aliquid eaque dignissimos ratione iusto
      corporis vero vel. Reprehenderit minus rerum, quibusdam consequatur nobis
      culpa quidem ad distinctio non fugit aliquid, eos tenetur, vel iusto
      laborum possimus illo. Dolores eos dignissimos, necessitatibus error iste
      exercitationem cumque provident amet dicta vitae quis modi, iusto et.
      Repellat nisi provident voluptatem natus recusandae incidunt mollitia, hic
      alias, dolorem inventore dolorum error a. Accusantium quisquam quia labore
      aperiam exercitationem unde. Suscipit dolorum expedita animi dolor sed
      dolore tempora, ea sunt ipsum unde accusamus dignissimos quam aliquam modi
      ipsa error corrupti harum iure totam sequi officia! Modi, odit sunt?
      Repellat saepe ipsam, illum quidem quod modi rem similique reiciendis
      quaerat non optio quas. Distinctio minus voluptas tenetur tempora soluta
      illum rerum praesentium rem? Incidunt sit, vitae qui aut numquam
      asperiores quasi sequi mollitia laudantium quis porro quia a provident ex
      animi, maiores harum odit dolor doloribus temporibus, eum cum neque
      aliquid. Corporis alias impedit porro quae, deserunt nisi illo, inventore
      veniam debitis quasi, provident ad? Iste, autem nihil corrupti et sed
      repudiandae rerum delectus optio labore eveniet temporibus minima porro,
      recusandae earum deserunt nulla sint nostrum soluta tenetur architecto
      natus enim, necessitatibus placeat? Voluptate molestiae dignissimos velit
      libero hic tenetur! Praesentium reprehenderit libero magni quidem
      laboriosam architecto quibusdam adipisci harum ratione quam itaque nihil
      reiciendis quod ipsum amet sequi delectus error asperiores, perferendis
      quo? Eveniet fuga doloribus accusamus mollitia iusto iste, quibusdam
      dolorum, officia reprehenderit commodi tempore labore error, consectetur
      quo unde harum perferendis. Ut explicabo iure dolores minus officia
      voluptate ipsam iusto. Ea doloribus quae nesciunt impedit odit, eius,
      blanditiis voluptates maiores at excepturi, explicabo porro aspernatur
      dolorum voluptate id! Quia eos aperiam possimus magni quisquam inventore
      non voluptatem quis excepturi, eum ea, praesentium, et repudiandae
      adipisci amet dolorem!
    </Box>
  );
};

export default Dashboard;
