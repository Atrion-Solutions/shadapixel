import { Container } from "../components/index";
import OurProjects from "../components/OurProjects";
import Service from "../components/Service";
import OurClients from "../components/OurClients";
import Industries from "../components/Industries";
import { Button } from "@/components/ui/button";
import { useNavigateAndScroll } from "../util/navigate";
import { motion } from "framer-motion";
// import Transition from "../components/Transition";

function Home() {
  const navigateAndScroll = useNavigateAndScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Container>
        {/* Hero Section */}
        <section className="py-20 relative">
          {/* Floating services */}
          <div className="hidden md:block">
            <div
              className="absolute animation-float serOne"
              style={{ top: "10%", left: "0%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-slate-400"></div>
                <span className="text-white">Web Development</span>
              </div>
            </div>

            <div
              className="absolute animation-float serTwo"
              style={{ top: "10%", right: "20%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-teal-400"></div>
                <span className="text-white">App Development</span>
              </div>
            </div>

            <div
              className="absolute animation-float serSix"
              style={{ top: "0%", right: "50%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-primary"></div>
                <span className="text-white">Digital Marketing</span>
              </div>
            </div>

            <div
              className="absolute animation-float serThree"
              style={{ bottom: "20%", left: "40%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-green-400"></div>
                <span className="text-white">SEO</span>
              </div>
            </div>

            <div
              className="absolute animation-float serFour"
              style={{ bottom: "5%", left: "80%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-red-400"></div>
                <span className="text-white">Business Analytics</span>
              </div>
            </div>
          </div>
          <div className="space-y-5 md:space-y-0">
            <div className="relative">
              <svg
                viewBox="0 0 1493 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask
                  id="a"
                  maskUnits="userSpaceOnUse"
                  x={-3}
                  y={43}
                  width={1474}
                  height={258}
                  fill="#000"
                >
                  <path fill="#fff" d="M-3 43H1471V301H-3z" />
                  <path d="M187.25 292l-10.15-33.95H92.75L82.6 292H3.5L91.35 51.2h89.95L269.15 292h-81.9zm-78.4-87.85H161l-25.2-85.75h-1.4l-25.55 85.75zm303.795-91.35V292h-77.35V112.8h-79.1V51.2h235.2v61.6h-78.75zm342.537 12.25c0 14.7-3.966 28-11.9 39.9-7.933 11.9-19.483 20.65-34.65 26.25l53.55 100.8h-86.8l-42.7-87.85h-28.7V292h-77.35V51.2h147.35c17.267 0 31.967 3.383 44.1 10.15 12.367 6.533 21.584 15.517 27.65 26.95 6.3 11.2 9.45 23.45 9.45 36.75zm-78.75 3.15c0-6.3-2.1-11.55-6.3-15.75-4.2-4.2-9.333-6.3-15.4-6.3h-50.75v44.45h50.75c6.067 0 11.2-2.1 15.4-6.3 4.2-4.433 6.3-9.8 6.3-16.1zM802.545 292V51.2h77.35V292h-77.35zM1054.78 47c41.53 0 73.62 10.617 96.25 31.85 22.63 21.233 33.95 52.15 33.95 92.75s-11.32 71.517-33.95 92.75c-22.63 21.233-54.72 31.85-96.25 31.85s-73.617-10.5-96.25-31.5c-22.4-21.233-33.6-52.267-33.6-93.1 0-40.833 11.2-71.75 33.6-92.75C981.163 57.617 1013.25 47 1054.78 47zm0 57.75c-16.57 0-29.17 5.017-37.8 15.05-8.63 10.033-12.95 23.567-12.95 40.6v22.4c0 17.033 4.32 30.567 12.95 40.6 8.63 10.033 21.23 15.05 37.8 15.05 16.57 0 29.17-5.017 37.8-15.05 8.87-10.033 13.3-23.567 13.3-40.6v-22.4c0-17.033-4.43-30.567-13.3-40.6-8.63-10.033-21.23-15.05-37.8-15.05zM1398.83 292l-101.15-116.9V292h-71.05V51.2h67.55l101.15 118.65V51.2h71.05V292h-67.55z" />
                </mask>
                <path
                  d="M187.25 292l-10.15-33.95H92.75L82.6 292H3.5L91.35 51.2h89.95L269.15 292h-81.9zm-78.4-87.85H161l-25.2-85.75h-1.4l-25.55 85.75zm303.795-91.35V292h-77.35V112.8h-79.1V51.2h235.2v61.6h-78.75zm342.537 12.25c0 14.7-3.966 28-11.9 39.9-7.933 11.9-19.483 20.65-34.65 26.25l53.55 100.8h-86.8l-42.7-87.85h-28.7V292h-77.35V51.2h147.35c17.267 0 31.967 3.383 44.1 10.15 12.367 6.533 21.584 15.517 27.65 26.95 6.3 11.2 9.45 23.45 9.45 36.75zm-78.75 3.15c0-6.3-2.1-11.55-6.3-15.75-4.2-4.2-9.333-6.3-15.4-6.3h-50.75v44.45h50.75c6.067 0 11.2-2.1 15.4-6.3 4.2-4.433 6.3-9.8 6.3-16.1zM802.545 292V51.2h77.35V292h-77.35zM1054.78 47c41.53 0 73.62 10.617 96.25 31.85 22.63 21.233 33.95 52.15 33.95 92.75s-11.32 71.517-33.95 92.75c-22.63 21.233-54.72 31.85-96.25 31.85s-73.617-10.5-96.25-31.5c-22.4-21.233-33.6-52.267-33.6-93.1 0-40.833 11.2-71.75 33.6-92.75C981.163 57.617 1013.25 47 1054.78 47zm0 57.75c-16.57 0-29.17 5.017-37.8 15.05-8.63 10.033-12.95 23.567-12.95 40.6v22.4c0 17.033 4.32 30.567 12.95 40.6 8.63 10.033 21.23 15.05 37.8 15.05 16.57 0 29.17-5.017 37.8-15.05 8.87-10.033 13.3-23.567 13.3-40.6v-22.4c0-17.033-4.43-30.567-13.3-40.6-8.63-10.033-21.23-15.05-37.8-15.05zM1398.83 292l-101.15-116.9V292h-71.05V51.2h67.55l101.15 118.65V51.2h71.05V292h-67.55z"
                  fill="#000"
                />
                <path
                  d="M187.25 292l-3.832 1.146.853 2.854h2.979v-4zm-10.15-33.95l3.832-1.146-.853-2.854H177.1v4zm-84.35 0v-4h-2.98l-.852 2.854 3.832 1.146zM82.6 292v4h2.98l.852-2.854L82.6 292zm-79.1 0l-3.758-1.371-1.96 5.371H3.5v-4zM91.35 51.2v-4h-2.799l-.959 2.63 3.758 1.37zm89.95 0l3.758-1.37-.959-2.63H181.3v4zM269.15 292v4h5.717l-1.959-5.371L269.15 292zm-160.3-87.85l-3.833-1.142-1.533 5.142h5.366v-4zm52.15 0v4h5.345l-1.507-5.128L161 204.15zm-25.2-85.75l3.838-1.128-.844-2.872H135.8v4zm-1.4 0v-4h-2.982l-.851 2.858 3.833 1.142zm56.682 172.454l-10.15-33.95-7.664 2.292 10.15 33.95 7.664-2.292zM177.1 254.05H92.75v8h84.35v-8zm-88.182 2.854l-10.15 33.95 7.664 2.292 10.15-33.95-7.664-2.292zM82.6 288H3.5v8h79.1v-8zm-75.342 5.371l87.85-240.8-7.516-2.742-87.85 240.8 7.516 2.742zM91.35 55.2h89.95v-8H91.35v8zm86.192-2.63l87.85 240.801 7.516-2.742-87.85-240.8-7.516 2.742zM269.15 288h-81.9v8h81.9v-8zm-160.3-79.85H161v-8h-52.15v8zm55.988-5.128l-25.2-85.75-7.676 2.256 25.2 85.75 7.676-2.256zM135.8 114.4h-1.4v8h1.4v-8zm-5.233 2.858l-25.55 85.75 7.666 2.284 25.55-85.75-7.666-2.284zm282.078-4.458v-4h-4v4h4zm0 179.2v4h4v-4h-4zm-77.35 0h-4v4h4v-4zm0-179.2h4v-4h-4v4zm-79.1 0h-4v4h4v-4zm0-61.6v-4h-4v4h4zm235.2 0h4v-4h-4v4zm0 61.6v4h4v-4h-4zm-82.75 0V292h8V112.8h-8zm4 175.2h-77.35v8h77.35v-8zm-73.35 4V112.8h-8V292h8zm-4-183.2h-79.1v8h79.1v-8zm-75.1 4V51.2h-8v61.6h8zm-4-57.6h235.2v-8h-235.2v8zm231.2-4v61.6h8V51.2h-8zm4 57.6h-78.75v8h78.75v-8zm251.887 56.15l-3.328-2.219 3.328 2.219zm-34.65 26.25l-1.385-3.752-4.295 1.585 2.148 4.044 3.532-1.877zm53.55 100.8v4h6.655l-3.122-5.877-3.533 1.877zm-86.8 0l-3.597 1.749 1.094 2.251h2.503v-4zm-42.7-87.85l3.598-1.749-1.094-2.251h-2.504v4zm-28.7 0v-4h-4v4h4zm0 87.85v4h4v-4h-4zm-77.35 0h-4v4h4v-4zm0-240.8v-4h-4v4h4zm191.45 10.15l-1.948 3.493.04.023.04.02 1.868-3.536zm27.65 26.95l-3.533 1.875.023.043.024.043 3.486-1.961zm-75.6 24.15l-2.828 2.828 2.828-2.828zm-66.15-6.3v-4h-4v4h4zm0 44.45h-4v4h4v-4zm66.15-6.3l2.829 2.828.038-.038.037-.039-2.904-2.751zm81.05-19.25c0 13.934-3.745 26.457-11.228 37.681l6.657 4.438c8.384-12.576 12.571-26.653 12.571-42.119h-8zm-11.228 37.681c-7.404 11.106-18.226 19.37-32.707 24.717l2.771 7.504c15.852-5.853 28.13-15.089 36.593-27.783l-6.657-4.438zM705.1 193.077l53.55 100.8 7.065-3.754-53.55-100.8-7.065 3.754zM762.182 288h-86.8v8h86.8v-8zm-83.202 2.251l-42.7-87.85-7.195 3.498 42.7 87.85 7.195-3.498zm-46.298-90.101h-28.7v8h28.7v-8zm-32.7 4V292h8v-87.85h-8zm4 83.85h-77.35v8h77.35v-8zm-73.35 4V51.2h-8V292h8zm-4-236.8h147.35v-8h-147.35v8zm147.35 0c16.749 0 30.743 3.28 42.152 9.643l3.897-6.987c-12.857-7.17-28.263-10.656-46.049-10.656v8zm42.232 9.687c11.718 6.19 20.325 14.62 25.985 25.288l7.067-3.75c-6.473-12.2-16.299-21.736-29.315-28.612l-3.737 7.074zm26.032 25.374c5.951 10.58 8.936 22.151 8.936 34.789h8c0-13.962-3.314-26.89-9.963-38.711l-6.973 3.922zM680.432 128.2c0-7.289-2.472-13.579-7.471-18.578l-5.657 5.656c3.401 3.401 5.128 7.611 5.128 12.922h8zm-7.471-18.578c-4.968-4.968-11.126-7.472-18.229-7.472v8c5.032 0 9.14 1.696 12.572 5.128l5.657-5.656zm-18.229-7.472h-50.75v8h50.75v-8zm-54.75 4v44.45h8v-44.45h-8zm4 48.45h50.75v-8h-50.75v8zm50.75 0c7.103 0 13.261-2.504 18.229-7.472l-5.657-5.656c-3.432 3.432-7.54 5.128-12.572 5.128v8zm18.304-7.549c4.928-5.202 7.396-11.563 7.396-18.851h-8c0 5.312-1.732 9.684-5.203 13.349l5.807 5.502zM802.545 292h-4v4h4v-4zm0-240.8v-4h-4v4h4zm77.35 0h4v-4h-4v4zm0 240.8v4h4v-4h-4zm-73.35 0V51.2h-8V292h8zm-4-236.8h77.35v-8h-77.35v8zm73.35-4V292h8V51.2h-8zm4 236.8h-77.35v8h77.35v-8zm271.135-23.65l-2.74-2.917 2.74 2.917zm-192.5.35l-2.752 2.903.015.015.016.014 2.721-2.932zm0-185.85l2.735 2.918h.001l-2.736-2.918zm58.45 40.95l3.03 2.609-3.03-2.609zm75.6 103.6l-3-2.649-.02.02-.01.02 3.03 2.609zm0-103.6l-3.03 2.609.01.02.02.02 3-2.649zm-37.8-68.8c40.87 0 71.84 10.438 93.51 30.767l5.48-5.834C1130.17 53.796 1096.98 43 1054.78 43v8zm93.51 30.767c21.6 20.263 32.69 49.98 32.69 89.833h8c0-41.347-11.55-73.463-35.21-95.667l-5.48 5.834zm32.69 89.833c0 39.853-11.09 69.57-32.69 89.833l5.48 5.834c23.66-22.204 35.21-54.32 35.21-95.667h-8zm-32.69 89.833c-21.67 20.329-52.64 30.767-93.51 30.767v8c42.2 0 75.39-10.796 98.99-32.933l-5.48-5.834zm-93.51 30.767c-40.88 0-71.86-10.327-93.53-30.432l-5.441 5.864c23.598 21.895 56.781 32.568 98.971 32.568v-8zm-93.498-30.403c-21.37-20.256-32.352-50.091-32.352-90.197h-8c0 41.561 11.417 73.793 34.848 96.003l5.504-5.806zM928.93 171.6c0-40.109 10.983-69.814 32.335-89.832l-5.471-5.836c-23.448 21.982-34.864 54.11-34.864 95.668h8zm32.336-89.833C982.937 61.437 1013.91 51 1054.78 51v-8c-42.2 0-75.39 10.796-98.987 32.933l5.473 5.834zm93.514 18.983c-17.41 0-31.25 5.31-40.83 16.441l6.06 5.218c7.69-8.935 19.05-13.659 34.77-13.659v-8zm-40.83 16.441c-9.42 10.947-13.92 25.499-13.92 43.209h8c0-16.357 4.13-28.871 11.98-37.991l-6.06-5.218zm-13.92 43.209v22.4h8v-22.4h-8zm0 22.4c0 17.71 4.5 32.262 13.92 43.209l6.06-5.218c-7.85-9.12-11.98-21.634-11.98-37.991h-8zm13.92 43.209c9.58 11.131 23.42 16.441 40.83 16.441v-8c-15.72 0-27.08-4.724-34.77-13.659l-6.06 5.218zm40.83 16.441c17.41 0 31.25-5.31 40.83-16.441l-6.06-5.218c-7.69 8.935-19.05 13.659-34.77 13.659v8zm40.8-16.401c9.67-10.947 14.3-25.514 14.3-43.249h-8c0 16.331-4.24 28.831-12.3 37.951l6 5.298zm14.3-43.249v-22.4h-8v22.4h8zm0-22.4c0-17.735-4.63-32.302-14.3-43.249l-6 5.298c8.06 9.12 12.3 21.62 12.3 37.951h8zm-14.27-43.209c-9.58-11.131-23.42-16.441-40.83-16.441v8c15.72 0 27.08 4.724 34.77 13.659l6.06-5.218zM1398.83 292l-3.02 2.617L1397 296h1.83v-4zm-101.15-116.9l3.03-2.617-7.03-8.119V175.1h4zm0 116.9v4h4v-4h-4zm-71.05 0h-4v4h4v-4zm0-240.8v-4h-4v4h4zm67.55 0l3.05-2.595-1.2-1.405h-1.85v4zm101.15 118.65l-3.04 2.595 7.04 8.263V169.85h-4zm0-118.65v-4h-4v4h4zm71.05 0h4v-4h-4v4zm0 240.8v4h4v-4h-4zm-64.52-2.617l-101.15-116.9-6.05 5.234 101.15 116.9 6.05-5.234zM1293.68 175.1V292h8V175.1h-8zm4 112.9h-71.05v8h71.05v-8zm-67.05 4V51.2h-8V292h8zm-4-236.8h67.55v-8h-67.55v8zm64.51-1.405l101.15 118.65 6.09-5.19-101.15-118.65-6.09 5.19zm108.19 116.055V51.2h-8v118.65h8zm-4-114.65h71.05v-8h-71.05v8zm67.05-4V292h8V51.2h-8zm4 236.8h-67.55v8h67.55v-8z"
                  fill="#BFE689"
                  mask="url(#a)"
                />
                <mask
                  id="b"
                  style={{
                    maskType: "alpha",
                  }}
                  maskUnits="userSpaceOnUse"
                  x={3}
                  y={47}
                  width={1464}
                  height={250}
                >
                  <path
                    d="M187.25 292l-10.15-33.95H92.75L82.6 292H3.5L91.35 51.2h89.95L269.15 292h-81.9zm-78.4-87.85H161l-25.2-85.75h-1.4l-25.55 85.75zm303.795-91.35V292h-77.35V112.8h-79.1V51.2h235.2v61.6h-78.75zm342.537 12.25c0 14.7-3.966 28-11.9 39.9-7.933 11.9-19.483 20.65-34.65 26.25l53.55 100.8h-86.8l-42.7-87.85h-28.7V292h-77.35V51.2h147.35c17.267 0 31.967 3.383 44.1 10.15 12.367 6.533 21.584 15.517 27.65 26.95 6.3 11.2 9.45 23.45 9.45 36.75zm-78.75 3.15c0-6.3-2.1-11.55-6.3-15.75-4.2-4.2-9.333-6.3-15.4-6.3h-50.75v44.45h50.75c6.067 0 11.2-2.1 15.4-6.3 4.2-4.433 6.3-9.8 6.3-16.1zM802.545 292V51.2h77.35V292h-77.35zM1054.78 47c41.53 0 73.62 10.617 96.25 31.85 22.63 21.233 33.95 52.15 33.95 92.75s-11.32 71.517-33.95 92.75c-22.63 21.233-54.72 31.85-96.25 31.85s-73.617-10.5-96.25-31.5c-22.4-21.233-33.6-52.267-33.6-93.1 0-40.833 11.2-71.75 33.6-92.75C981.163 57.617 1013.25 47 1054.78 47zm0 57.75c-16.57 0-29.17 5.017-37.8 15.05-8.63 10.033-12.95 23.567-12.95 40.6v22.4c0 17.033 4.32 30.567 12.95 40.6 8.63 10.033 21.23 15.05 37.8 15.05 16.57 0 29.17-5.017 37.8-15.05 8.87-10.033 13.3-23.567 13.3-40.6v-22.4c0-17.033-4.43-30.567-13.3-40.6-8.63-10.033-21.23-15.05-37.8-15.05zM1398.83 292l-101.15-116.9V292h-71.05V51.2h67.55l101.15 118.65V51.2h71.05V292h-67.55z"
                    fill="#000"
                  />
                </mask>
                <g mask="url(#b)">
                  <path
                    fill="url(#pattern0_357_247)"
                    d="M-19 -374H1498V764H-19z"
                  />
                </g>
                <defs>
                  <pattern
                    id="pattern0_357_247"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_357_247"
                      transform="matrix(.00121 0 0 .00161 0 0)"
                    />
                  </pattern>
                  <image
                    id="image0_357_247"
                    height={620}
                    xlinkHref="/header.jpg"
                    style={{
                      width: "100%",
                    }}
                  />
                </defs>
              </svg>
              <div className="relative flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between">
                <img
                  className="absolute hidden sm:block top-0 w-full"
                  src="/hero-lg.svg"
                  alt=""
                />
                <div className="flex flex-col items-center sm:items-start gap-5 pt-6 md:pt-5 lg:pt-10">
                  <p className="font-text text-white tracking-wider text-lg text-center md:text-start md:pr-16 xl:text-xl">
                    Empowering Your Vision Through{" "}
                    <br className="hidden sm:block md:block lg:hidden" />{" "}
                    Innovation. <br /> Your growth is our mission.
                  </p>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      className="w-64 z-10 relative lg:mt-6"
                      onClick={() => navigateAndScroll("/contact-us")}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
                <div className="md:pt-5 lg:pt-8">
                  <h2 className="text-5xl sm:text-6xl md:text-[54px] lg:text-7xl xl:text-[90px] text-white font-extrabold  mb-5 text-center sm:text-end">
                    SOLUTIONS
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* who we are */}
        <section className="relative py-10 xl:py-24 overflow-hidden">
          {/* Text Section */}
          <div className="text-center mb-8">
            <motion.h3
              className="text-white text-center font-semibold  uppercase mb-8 text-2xl lg:text-4xl xl:text-5xl"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Who we are
            </motion.h3>
            <motion.p
              className="text-center font-text text-white sm:text-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              Welcome to Shadapixel, where innovation meets excellence in the
              ever-evolving world of technology. At Shadapixel, we don&apos;t
              just ride the waves of change – we create them. Founded on the
              principles of creativity, integrity, and excellence, we have
              assembled a dream team of tech wizards, creative geniuses, and
              strategic masterminds to bring your boldest digital visions to
              life. We are driven by a passion for helping businesses thrive in
              the digital age and are dedicated to delivering solutions that
              exceed expectations and propel them toward success.
            </motion.p>
          </div>
          {/* Button */}
          <div className="text-center mt-4">
            <motion.div
            className="inline-block"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Button onClick={() => navigateAndScroll("/about-us")}>
                Learn more about us
              </Button>
            </motion.div>
          </div>
        </section>
        {/* service section */}
        <Service />
        {/* our Projects */}
        <OurProjects />
        {/* Industries IT solution */}
        <Industries />
        {/* Our Clients */}
        <OurClients />
        {/* promotion section */}
        <section className="pb-10 xl:py-24">
          <div className="flex flex-col items-center">
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl text-white font-bold mb-8 text-center sm:text-left"
            >
              Are you ready to boost your Business?
            </motion.h3>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Button onClick={() => navigateAndScroll("/contact-us")}>
                Contact us for more
              </Button>
            </motion.div>
          </div>
        </section>
      </Container>
    </motion.div>
  );
}

export default Home;
