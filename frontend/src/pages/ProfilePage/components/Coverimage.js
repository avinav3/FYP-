import React, { useState } from "react";
import Wrapper from "../wrappers/Coverimage";
import { useAppContext } from "../../../context/appContext";
import axios from "axios";

const Coverimage = ({ coverimage, changeactive, activeindex, subtract }) => {
  const { profileUser, isLoading, token, user } = useAppContext();

  const option = {
    preview: null,
    coverimg: null,
    isedit: false,
    file: "",
  };
  const [coverpage, setCover] = useState(option);

  const fileselection = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let blobURL = URL.createObjectURL(file);
      setCover({
        ...coverpage,
        isedit: true,
        preview: blobURL,
        file: e.target.files[0],
      });
    }
  };

  const oncancel = () => {
    setCover({ ...coverpage, isedit: false, preview: null });
  };

  const onsave = async () => {
    try {
      const formData = new FormData();
      formData.append("coverpage", coverpage.file);
      await axios.patch(`/api/v1/profile/editcoverpage`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCover({
        ...coverpage,
        isedit: false,
        coverimg: coverpage.preview,
        preview: null,
      });
    } catch (error) {
      console.error("Error saving cover image:", error);
    }
  };

  if (isLoading) {
    return <div className="cover-loader"></div>;
  }

  return (
    <Wrapper>
      <div className="cover-container">
        <img
          className="coverimg"
          src={coverpage.preview ?? coverpage.coverimg ?? profileUser.coverpage}
          alt="Cover"
        />
        <div className="overlay-gradient"></div>
      </div>

      <div className="foll">
        <div
          className={
            activeindex === 5
              ? "followers glassmorphism active"
              : "followers glassmorphism"
          }
          onClick={() => changeactive(5)}
        >
          <h2>{profileUser?.followers?.length}</h2>
          <p>followers</p>
        </div>

        <div
          className={
            activeindex === 6
              ? "following glassmorphism active"
              : "following glassmorphism"
          }
          onClick={() => changeactive(6)}
        >
          <h2>{Number(profileUser?.following?.length) - Number(subtract)}</h2>
          <p>following</p>
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        id="cover"
        name="cover"
        className="d-none"
        onChange={fileselection}
      />

      <div className="btns">
        {user._id === profileUser._id ? (
          !coverpage.isedit ? (
            <label htmlFor="cover" className="btn-edit">
              Redesign
            </label>
          ) : (
            <button onClick={oncancel} className="btn-cancel">
              Cancel
            </button>
          )
        ) : null}

        {user._id === profileUser._id && coverpage.isedit ? (
          <button onClick={onsave} className="btn-save">
            Save
          </button>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Coverimage;
