// import clsx from "clsx";

// const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
//   return (
//     <button
//       id={id}
//       className={clsx(
//         "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
//         containerClass
//       )}
//     >
//       {leftIcon}

//       <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
//         <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
//           {title}
//         </div>
//         <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
//           {title}
//         </div>
//       </span>

//       {rightIcon}
//     </button>
//   );
// };

// export default Button;

import clsx from "clsx";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  textSize = "text-xs",
  as = "button", // Render as button or anchor
  ...props // Additional props
}) => {
  const Component = as; // Dynamically set the component type

  return (
    <Component
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black flex items-center gap-2",
        textSize,
        containerClass
      )}
      {...props} // Spread additional props
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </Component>
  );
};

export default Button;

