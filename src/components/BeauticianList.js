import { useSelector } from "react-redux";
import {useEffect} from "react";
import { useParams } from "react-router-dom";
import "./css/doctorlist.css";
import Beautician from "./Beautician";
import { useDispatch } from "react-redux";
import { setBeauticianList } from "../features/beauticianSlice";
import { getBeauticianList } from "../services/BeauticianServices";

function BeauticianList() {
  const dispatch = useDispatch();
  const { beauticianList } = useSelector((state) => state.beautician);
  let { category } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await getBeauticianList();
      dispatch(setBeauticianList(response.beauticians));
    }
    getData();
  }, []);

  return (
    <div className="beauticianList">
      {beauticianList && beauticianList.length > 0 ? (
        beauticianList
          .filter((beautician) => {
            if (category == "All") {
              return beautician;
            } else {
              return beautician.department === category;
            }
          })
          .map((beautician) => <Beautician key={beautician._id} beautician={beautician} />)
      ) : (
        <p>"It seems that list is empty"</p>
      )}
    </div>
  );
}

export default BeauticianList;
