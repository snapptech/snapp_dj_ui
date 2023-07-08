type IAvatar = {
  image?: string;
  onChange?: (image: File) => void;
};

export const Avatar = ({ image, onChange }: IAvatar) => {
  return (
    <div className="w-28 h-28 rounded-full overflow-hidden">
      <label
        className="w-full h-full flex justify-center items-center bg-white cursor-pointer"
        htmlFor="avatar-input"
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="avatar" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="65"
            fill="none"
            className="text-primary"
          >
            <path
              fill="currentColor"
              d="M18.515 3.968A7.003 7.003 0 0 1 24.637.366h11.486a7.004 7.004 0 0 1 6.122 3.602l2.12 3.814h6.202a9.475 9.475 0 0 1 9.475 9.475v11.196a21.324 21.324 0 0 0-11.535-3.369c-1.946 0-3.833.26-5.626.747a13.183 13.183 0 1 0-15.49 17.04 21.563 21.563 0 0 0 1.335 11.875H10.194a9.475 9.475 0 0 1-9.476-9.475V17.257a9.475 9.475 0 0 1 9.476-9.475h6.202l2.12-3.814Z"
            />
            <path
              fill="currentColor"
              d="M30.38 20.965a9.063 9.063 0 0 0-1.903 17.927 21.497 21.497 0 0 1 10.546-11.6 9.068 9.068 0 0 0-8.643-6.327ZM48.507 64.634c10.011 0 18.127-8.116 18.127-18.127 0-10.01-8.116-18.127-18.127-18.127-10.01 0-18.127 8.116-18.127 18.127 0 10.01 8.116 18.127 18.127 18.127Zm0-29.662a1.648 1.648 0 0 1 1.648 1.648v8.24h8.24a1.648 1.648 0 0 1 0 3.295h-8.24v8.24a1.648 1.648 0 0 1-3.296 0v-8.24h-8.24a1.648 1.648 0 1 1 0-3.296h8.24v-8.24a1.648 1.648 0 0 1 1.648-1.647Z"
            />
          </svg>
        )}
        <input
          type="file"
          id="avatar-input"
          hidden
          onChange={(input) =>
            input.target.files?.[0] && onChange?.(input.target.files[0])
          }
        />
      </label>
    </div>
  );
};
