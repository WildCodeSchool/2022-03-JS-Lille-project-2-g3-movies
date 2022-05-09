import axios from "axios";
import { useEffect, useState } from "react";
import CardForm from "../CardForm";
import SUserList from "./style";

export default function UserList() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const movieId = localStorage.movies ? localStorage.movies.split(",") : [];
    for (let i = 0; i < movieId.length; i + 1) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then(({ data }) => setListData((allData) => [...allData, data]));
    }
  }, []);
  return (
    <SUserList>
      <div className="userListPage">
        <h2>User List</h2>
        <div className="result">
          {listData.length > 0 ? (
            listData.map((movie) => <CardForm movie={movie} key={movie.id} />)
          ) : (
            <h2> Nothing add</h2>
          )}
        </div>
      </div>
    </SUserList>
  );
}
