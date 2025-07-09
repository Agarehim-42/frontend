import React from "react";
import Link from "next/link";

const Akademiya: React.FC = () => {
  return (
    <div className="py-5">
      {/* Geri Butonu */}
      <Link href="/" className="text-blue-500 hover:text-blue-700">
        <button className="py-2 px-4">Geri</button>
      </Link>

      {/* Akademiya İçeriği */}
      <div className="mt-5 bg-gray-100 dark:bg-gray-700 rounded-md p-4">
        <h2 className="text-2xl font-semibold">Akademiya</h2>

        <ul className="space-y-3 mt-4">
          <li className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="#haqqimizda">Haqqımızda</a>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="#vakansiyalar">Vakansiyalar</a>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="#tedbirler">Tədbirlər</a>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="#bloq">Bloq</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Akademiya;
