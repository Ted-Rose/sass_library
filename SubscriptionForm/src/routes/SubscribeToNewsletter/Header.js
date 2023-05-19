const Header = (/* { links } */) => {
  return (
    <div className="navbar pl-0 pr-0 pt-0 pb-0 ">
      <div className="container pr-0">
        <svg
          width="25"
          height="40"
          viewBox="0 0 25 40"
          className="mb-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.75658 14.5161L0 7.41936L6.57895 8.54839L5.75658 0.967742L10.5263 6.45161L12.5 0L14.4737 6.45161L19.2434 0.967742L18.4211 8.54839L25 7.41936L19.2434 14.5161H5.75658ZM8.07206 10.1146L7.51478 4.97752L11.0926 9.09101L12.5 4.49046L13.9074 9.09101L17.4852 4.97752L16.9279 10.1146L21.8124 9.27632L18.6088 13.2258H6.39123L3.18759 9.27632L8.07206 10.1146Z"
            fill="#4066A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0658 40H5.26316L0.328947 35.1613V20.6452L5.26316 15.8065H20.0658L25 20.6452V35.1613L20.0658 40ZM7.67582 27.2055L11.8448 23.1172L5.72958 17.1738L1.64474 21.1796V21.344L7.67582 27.2055ZM17.9841 17.0968H7.51948L12.7752 22.2048L17.9841 17.0968ZM8.61039 28.1138L12.7794 24.0255L16.8012 27.9342L12.6322 32.0225L8.61039 28.1138ZM13.7098 23.1131L17.7316 27.0218L23.6842 21.1844V21.1796L19.6828 17.2557L13.7098 23.1131ZM13.5667 32.9308L17.7357 28.8425L23.6842 34.6238V34.6268L19.5208 38.7097H19.5127L13.5667 32.9308ZM18.6662 27.9301L23.6842 32.8071V23.0092L18.6662 27.9301ZM6.7454 28.1179L1.64474 23.1606V33.1199L6.7454 28.1179ZM7.67998 29.0262L11.7017 32.9349L5.81302 38.7097H5.80818L1.80679 34.7857L7.67998 29.0262ZM17.6435 38.7097H7.67383L12.6363 33.8432L17.6435 38.7097Z"
            fill="#4066A5"
          />
        </svg>
        <svg
          className="sm-hide"
          width="78"
          height="16"
          viewBox="0 0 78 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 16V3.45115H1.39834V4.63001C1.72803 4.16871 2.10035 3.82417 2.5153 3.59637C2.93026 3.36288 3.43332 3.24613 4.02449 3.24613C4.79755 3.24613 5.47967 3.44545 6.07084 3.8441C6.662 4.24275 7.10822 4.80655 7.40949 5.5355C7.71076 6.25877 7.86139 7.05321 7.86139 7.91885C7.86139 8.84713 7.6937 9.68429 7.35833 10.4303C7.02864 11.1707 6.54547 11.7402 5.90883 12.1388C5.27787 12.5318 4.61281 12.7282 3.91364 12.7282C3.40206 12.7282 2.94163 12.62 2.53236 12.4036C2.12877 12.1872 1.79624 11.9139 1.53476 11.5836V16H0ZM1.38981 8.03844C1.38981 9.20591 1.62571 10.0687 2.09751 10.6268C2.5693 11.1849 3.14058 11.464 3.81132 11.464C4.49344 11.464 5.07608 11.1764 5.55925 10.6012C6.0481 10.0203 6.29252 9.12333 6.29252 7.9103C6.29252 6.75423 6.05378 5.88859 5.5763 5.3134C5.1045 4.73821 4.53892 4.45061 3.87954 4.45061C3.22584 4.45061 2.64604 4.75814 2.14014 5.3732C1.63992 5.98256 1.38981 6.87097 1.38981 8.03844Z"
            fill="#131821"
          />
          <path
            d="M9.72868 1.76829V0H11.2634V1.76829H9.72868ZM9.72868 12.5232V3.45115H11.2634V12.5232H9.72868Z"
            fill="#131821"
          />
          <path
            d="M13.6082 12.5232V3.45115H14.9895V4.74106C15.6546 3.74444 16.6152 3.24613 17.8714 3.24613C18.4171 3.24613 18.9174 3.34579 19.3721 3.54511C19.8325 3.73874 20.1764 3.99502 20.4038 4.31393C20.6312 4.63285 20.7903 5.01157 20.8813 5.45008C20.9381 5.73483 20.9665 6.23314 20.9665 6.94501V12.5232H19.4318V7.00481C19.4318 6.37836 19.3721 5.91137 19.2527 5.60384C19.1334 5.29062 18.9202 5.04289 18.6132 4.86065C18.312 4.67272 17.9567 4.57875 17.5474 4.57875C16.8937 4.57875 16.3282 4.78662 15.8507 5.20235C15.3789 5.61808 15.143 6.40683 15.143 7.56861V12.5232H13.6082Z"
            fill="#131821"
          />
          <path
            d="M29.5271 9.60171L31.113 9.79819C30.8629 10.7265 30.3997 11.4469 29.7232 11.9594C29.0468 12.472 28.1828 12.7282 27.1312 12.7282C25.8067 12.7282 24.7551 12.3211 23.9764 11.5067C23.2033 10.6866 22.8168 9.53906 22.8168 8.06407C22.8168 6.53782 23.209 5.35327 23.9934 4.51041C24.7779 3.66756 25.7954 3.24613 27.0459 3.24613C28.2567 3.24613 29.2457 3.65901 30.0131 4.48478C30.7805 5.31055 31.1642 6.47233 31.1642 7.9701C31.1642 8.06122 31.1613 8.1979 31.1557 8.38014H24.4027C24.4596 9.37676 24.7409 10.1399 25.2468 10.6695C25.7527 11.1991 26.3837 11.464 27.1397 11.464C27.7024 11.464 28.1828 11.3159 28.5807 11.0198C28.9786 10.7236 29.2941 10.2509 29.5271 9.60171ZM24.488 7.11586H29.5442C29.476 6.35273 29.2827 5.78039 28.9644 5.39883C28.4755 4.80655 27.8417 4.51041 27.063 4.51041C26.3581 4.51041 25.7641 4.74675 25.2809 5.21943C24.8035 5.69212 24.5391 6.32426 24.488 7.11586Z"
            fill="#131821"
          />
          <path
            d="M38.9574 11.4042C38.3889 11.8882 37.8404 12.2299 37.3118 12.4293C36.7888 12.6286 36.2261 12.7282 35.6235 12.7282C34.6288 12.7282 33.8642 12.4862 33.3299 12.0021C32.7956 11.5124 32.5284 10.8888 32.5284 10.1313C32.5284 9.68713 32.6279 9.28279 32.8268 8.91831C33.0315 8.54814 33.2958 8.252 33.6198 8.0299C33.9495 7.8078 34.319 7.63979 34.7282 7.52589C35.0295 7.44617 35.4843 7.36928 36.0925 7.29525C37.3317 7.14718 38.244 6.97064 38.8295 6.76562C38.8352 6.5549 38.838 6.42107 38.838 6.36412C38.838 5.73768 38.693 5.29632 38.4031 5.04004C38.0109 4.69265 37.4283 4.51895 36.6552 4.51895C35.9333 4.51895 35.399 4.64709 35.0522 4.90336C34.7112 5.15394 34.4582 5.601 34.2934 6.24453L32.7927 6.03951C32.9292 5.39598 33.1537 4.87774 33.4663 4.48478C33.779 4.08614 34.2309 3.78146 34.822 3.57074C35.4132 3.35433 36.0982 3.24613 36.8769 3.24613C37.65 3.24613 38.2781 3.33725 38.7613 3.51949C39.2444 3.70173 39.5997 3.93237 39.8271 4.21143C40.0544 4.48478 40.2136 4.83218 40.3045 5.2536C40.3557 5.51557 40.3813 5.98825 40.3813 6.67165V8.72184C40.3813 10.1513 40.4125 11.0568 40.4751 11.4383C40.5433 11.8142 40.674 12.1758 40.8673 12.5232H39.2643C39.1052 12.2043 39.0028 11.8313 38.9574 11.4042ZM38.8295 7.9701C38.2724 8.1979 37.4368 8.39153 36.3227 8.55099C35.6917 8.64211 35.2455 8.74462 34.984 8.85852C34.7226 8.97241 34.5208 9.14042 34.3787 9.36252C34.2366 9.57893 34.1655 9.82096 34.1655 10.0886C34.1655 10.4987 34.319 10.8404 34.6259 11.1137C34.9386 11.3871 35.3933 11.5238 35.9902 11.5238C36.5813 11.5238 37.1071 11.3956 37.5676 11.1393C38.028 10.8774 38.3662 10.5214 38.5822 10.0715C38.747 9.72415 38.8295 9.2116 38.8295 8.5339V7.9701Z"
            fill="#131821"
          />
          <path
            d="M42.7687 16V3.45115H44.167V4.63001C44.4967 4.16871 44.869 3.82417 45.284 3.59637C45.699 3.36288 46.202 3.24613 46.7932 3.24613C47.5662 3.24613 48.2484 3.44545 48.8395 3.8441C49.4307 4.24275 49.8769 4.80655 50.1782 5.5355C50.4795 6.25877 50.6301 7.05321 50.6301 7.91885C50.6301 8.84713 50.4624 9.68429 50.127 10.4303C49.7973 11.1707 49.3142 11.7402 48.6775 12.1388C48.0466 12.5318 47.3815 12.7282 46.6823 12.7282C46.1707 12.7282 45.7103 12.62 45.301 12.4036C44.8975 12.1872 44.5649 11.9139 44.3035 11.5836V16H42.7687ZM44.1585 8.03844C44.1585 9.20591 44.3944 10.0687 44.8662 10.6268C45.338 11.1849 45.9093 11.464 46.58 11.464C47.2621 11.464 47.8448 11.1764 48.3279 10.6012C48.8168 10.0203 49.0612 9.12333 49.0612 7.9103C49.0612 6.75423 48.8225 5.88859 48.345 5.3134C47.8732 4.73821 47.3076 4.45061 46.6482 4.45061C45.9945 4.45061 45.4147 4.75814 44.9088 5.3732C44.4086 5.98256 44.1585 6.87097 44.1585 8.03844Z"
            fill="#131821"
          />
          <path
            d="M52.4888 16V3.45115H53.8872V4.63001C54.2169 4.16871 54.5892 3.82417 55.0042 3.59637C55.4191 3.36288 55.9222 3.24613 56.5133 3.24613C57.2864 3.24613 57.9685 3.44545 58.5597 3.8441C59.1509 4.24275 59.5971 4.80655 59.8983 5.5355C60.1996 6.25877 60.3502 7.05321 60.3502 7.91885C60.3502 8.84713 60.1826 9.68429 59.8472 10.4303C59.5175 11.1707 59.0343 11.7402 58.3977 12.1388C57.7667 12.5318 57.1017 12.7282 56.4025 12.7282C55.8909 12.7282 55.4305 12.62 55.0212 12.4036C54.6176 12.1872 54.2851 11.9139 54.0236 11.5836V16H52.4888ZM53.8787 8.03844C53.8787 9.20591 54.1146 10.0687 54.5864 10.6268C55.0582 11.1849 55.6294 11.464 56.3002 11.464C56.9823 11.464 57.5649 11.1764 58.0481 10.6012C58.5369 10.0203 58.7814 9.12333 58.7814 7.9103C58.7814 6.75423 58.5426 5.88859 58.0652 5.3134C57.5934 4.73821 57.0278 4.45061 56.3684 4.45061C55.7147 4.45061 55.1349 4.75814 54.629 5.3732C54.1288 5.98256 53.8787 6.87097 53.8787 8.03844Z"
            fill="#131821"
          />
          <path
            d="M62.1749 12.5232V0H63.7097V12.5232H62.1749Z"
            fill="#131821"
          />
          <path
            d="M72.2958 9.60171L73.8817 9.79819C73.6316 10.7265 73.1683 11.4469 72.4919 11.9594C71.8155 12.472 70.9515 12.7282 69.8999 12.7282C68.5754 12.7282 67.5238 12.3211 66.7451 11.5067C65.972 10.6866 65.5855 9.53906 65.5855 8.06407C65.5855 6.53782 65.9777 5.35327 66.7621 4.51041C67.5466 3.66756 68.5641 3.24613 69.8146 3.24613C71.0254 3.24613 72.0144 3.65901 72.7818 4.48478C73.5492 5.31055 73.9329 6.47233 73.9329 7.9701C73.9329 8.06122 73.93 8.1979 73.9244 8.38014H67.1714C67.2282 9.37676 67.5096 10.1399 68.0155 10.6695C68.5214 11.1991 69.1524 11.464 69.9084 11.464C70.4711 11.464 70.9515 11.3159 71.3494 11.0198C71.7473 10.7236 72.0627 10.2509 72.2958 9.60171ZM67.2567 7.11586H72.3129C72.2446 6.35273 72.0514 5.78039 71.7331 5.39883C71.2442 4.80655 70.6104 4.51041 69.8317 4.51041C69.1268 4.51041 68.5328 4.74675 68.0496 5.21943C67.5721 5.69212 67.3078 6.32426 67.2567 7.11586Z"
            fill="#131821"
          />
          <path
            d="M76.2521 12.5232V10.772H78V12.5232H76.2521Z"
            fill="#131821"
          />
        </svg>
        <ul class="display-f pr-5 mb-2 mt-2">
        <li class="font-md mr-2 pt-1 pb-1 text-hover-secondary">
          <a href="#">About</a>
        </li>
        <li class="font-md mr-2 pt-1 pb-1 text-hover-secondary">
          <a href="#">How it works</a>
        </li>
        <li class="font-md pt-1 pb-1 text-hover-secondary">
          <a href="#">Contact</a>
        </li>
      </ul>
      </div>

    </div>
  );
};

export default Header;
