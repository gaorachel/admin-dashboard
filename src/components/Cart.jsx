import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";

const Cart = () => {
  const { currentColor, isClicked, setIsClicked } = useStateContext();
  const [data, setData] = useState(
    cartData.map((item) => {
      return {
        ...item,
        qty: 1,
      };
    })
  );

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const sum = data.reduce((acc, item) => acc + parseFloat(item.price.slice(1)) * item.qty, 0);

    return setSubTotal(sum);
  }, [data]);

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-gray-900 bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={() => setIsClicked(isClicked.cart === "false")}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-gray-500"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {data.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt={item.name} />
                <div>
                  <p className="font-semibold ">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center ">
                      <button
                        className="p-2 bg-gray-300 dark:bg-gray-700 text-gray-900 rounded-md hover:bg-gray-400 dark:hover:bg-gray-400"
                        type="button"
                        onClick={() => {
                          const updatedData = [...data];
                          updatedData[index].qty = updatedData[index].qty === 0 ? 0 : updatedData[index].qty - 1;

                          setData(updatedData);
                        }}
                      >
                        <AiOutlineMinus />
                      </button>
                      <p className="p-2 text-black dark:text-white"> {item.qty} </p>
                      <button
                        className="p-2 bg-gray-300 dark:bg-gray-700 text-gray-900 rounded-md hover:bg-gray-400 dark:hover:bg-gray-400"
                        type="button"
                        onClick={() => {
                          const updatedData = [...data];
                          updatedData[index].qty += 1;

                          setData(updatedData);
                        }}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400">Sub Total</p>
            <p className="text-gray-500 dark:text-gray-400"> {`£${subTotal.toLocaleString()}`} </p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-black dark:text-gray-300 font-semibold">Total (+ 20% VAT) </p>
            <p className="text-black dark:text-gray-300 font-semibold"> {`£${(subTotal * 1.2).toLocaleString()}`} </p>
          </div>
        </div>
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="Place Order" borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
