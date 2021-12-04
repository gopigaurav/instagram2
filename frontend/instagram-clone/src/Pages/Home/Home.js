import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import "./Home.css";
import Posts from "../Posts/Posts.js";
import Followers from "../Followers/Followers";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../app/actions/post";
import Modal from "../../components/Modal/Modal"
import Actions from "../../components/Actions/Actions"
function Home() {
  //const slider = $(".slider-item");
  //Implementing navigation of slides using mouse scroll
  const slider = useRef();
  const dispatch = useDispatch();
  function handleScroll(e) {
    if (e.deltaX < 0) {
      slider.current.slickPrev();
    } else {
      slider.current.slickNext();
    }
  }
  const openActions = useSelector((state) => state.userAction.openActions);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  const settings = {
    //dots: true,
    infinite: false,
    //speed: 500,
    draggable: true,
    swipeToSlide: true,
    slidesToShow: 9,
    slidesToScroll: 4,
    swipe: true,
  };
  const data = [
    {
      id: "0",
      name: "gopi",
      pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: "1",
      name: "gaurav",
      pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "2",
      name: "Tom cruise",
      pic: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: "3",
      name: "gaurav",
      pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "4",
      name: "Tom cruise",
      pic: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: "5",
      name: "gaurav",
      pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "6",
      name: "Tom cruise",
      pic: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: "7",
      name: "gaurav",
      pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "8",
      name: "Tom cruise",
      pic: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: "9",
      name: "gaurav",
      pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "10",
      name: "Tom cruise",
      pic: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: "11",
      name: "gaurav",
      pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "12",
      name: "Tom cruise",
      pic: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: "13",
      name: "gaurav",
      pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "14",
      name: "Tom cruise",
      pic: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
  ];
  return (
    <>
    {openActions && (
        <Modal actionType={"OPEN_ACTIONS"}>
          <Actions/>
        </Modal>
      )}
      <div className="home__c">
        <div className="home__c_c">
          <div onWheel={handleScroll} className="home__slider">
            <Carousel {...settings} ref={slider}>
              {data.map((data, ind) => (
                <Wrap
                  key={ind}
                  onClick={() =>
                    dispatch({ type: "OPEN_INSTASTORIES", payload: true })
                  }
                >
                  <a>
                    <img src={data.pic} alt="" />
                  </a>
                  <div className="home__slider_text">
                    <p className="home_slider_names">{data.name}</p>
                  </div>
                </Wrap>
              ))}
            </Carousel>
          </div>
          <div>
            <Posts />
          </div>
        </div>
        <div className="home__c_r">
          <div className="h_c__r">
            <div className="hc_r">
              <div className="home_img_pic">
                <img src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              </div>
              <div>
                <p className="pro_info frst_text">gopi gaurav</p>
                <p className="pro_info scd_text">gopi</p>
              </div>
            </div>
            <p className="pro_info_switch_acc">Switch</p>
          </div>
          <div className="rt_btm">
            <div className="rt_btm_top">
              <p>Suggestions For You</p>
              <p>See All</p>
            </div>
            <Followers />
            <Followers />
            <Followers />
            <Followers />
          </div>
        </div>
      </div>
    </>
  );
}
const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
  }
  .slick-prev {
    left: -10px;
    opacity: 1 !important;
  }
  .slick-next {
    right: -10px;
    opacity: 1 !important;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  //width: 70px !important;
  position: relative;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    cursor: pointer;
    display: block;
    position: relative;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    border: 2px solid #f5783a;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:hover {
      /*padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;*/
    }
  }
`;

export default Home;
