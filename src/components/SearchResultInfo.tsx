import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} Restaurants found in {city}
        <Link
          to="/"
          className="ml-2 text-sm font-semibold underline cursor-pointer text-blue-500"
        >
          Change Location
        </Link>
      </span>
      insert sort drop dwon here
    </div>
  );
};

export default SearchResultInfo;
