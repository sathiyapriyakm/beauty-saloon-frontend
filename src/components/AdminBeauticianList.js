import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteBeautician, getBeauticianList } from "../services/BeauticianServices.js";
import { setBeauticianList } from "../features/beauticianSlice.js";
// import "./css/AdminBeauticianList .css";

function AdminBeauticianList () {
  const dispatch = useDispatch();
  const { beauticianList } = useSelector((state) => state.beautician);

  const handleDelete = async (email) => {
    const updatedList = beauticianList.filter((item, index) => {
      return item.email != email;
    });
    dispatch(setBeauticianList(updatedList));
    const response = await deleteBeautician({ email: email });
    if (response.success) {
      toast.success("Beautician deleted successfully");
    } else {
      toast.warning("Please try again later");
    }
  };

  const columns = [
    {
      name: "firstname",
      label: "Firstname",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lastname",
      label: "Lastname",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: "education",
      label: "Education",

      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "experience",
      label: "Experience ",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "department",
      label: "Department ",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "",
      label: "Action",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              onClick={(e) => {
                handleDelete(tableMeta.rowData[2]);
              }}
            >
              Delete
            </button>
          );
        },
      },
    },
  ];

  const options = {
    selectableRows: "none",
    print: false,
  };

  return (
    <div className="listdashboard">
      {beauticianList && beauticianList.length > 0 ? (
        <MUIDataTable
          title={"Beautician List"}
          data={beauticianList}
          columns={columns}
          options={options}
        />
      ) : (
        "It seems that list is empty.."
      )}
    </div>
  );
}

export default AdminBeauticianList ;
