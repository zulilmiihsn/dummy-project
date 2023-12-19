import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function Home() {
  //useState array data dari firestore database
  const [items, setItems] = useState<
    Array<{ name: string; price: string; id: string }>
  >([]);

  //useState yang digunakan untuk menyimpan data item yang akan ditambahkan ke database.
  const [newItem, setNewItem] = useState<{
    name: string;
    price: string;
    id: string;
  }>({ name: "", price: "", id: "" });

  const [editItem, setEditItem] = useState<{
    name: string;
    price: string;
    id: string;
  } | null>(null);

  const [isEditing, setIsEditing] = useState(false);

  //useState yang menyimpan variabel total perhitungan
  const [total, setTotal] = useState<number>(0);

  // membuat function untuk listing //

  // 1. Add item to database (create)
  const addItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.price !== "") {
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItem.price,
      });
      setNewItem({ name: "", price: "", id: "" });
    }
  };

  // 2. Read items from database (read)
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let itemsArr: Array<{ name: string; price: string; id: string }> = [];

      snapshot.forEach((itemDoc) => {
        const itemData = itemDoc.data();
        if (itemData && itemData.name && itemData.price) {
          itemsArr.push({
            name: itemData.name,
            price: itemData.price,
            id: itemDoc.id,
          });
        }
      });
      setItems(itemsArr);

      // 2.1 Read total from itemsArr (read)
      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0,
        );
        setTotal(totalPrice);
      };
      calculateTotal();
      return () => unsubscribe();
    });
  }, []);

  // 3. Delete items from database (delete)
  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, "items", id));
  };

  // 4. Update Items from database (update/edit)
  const updateItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editItem) {
      const itemRef = doc(db, "items", editItem.id);
      await updateDoc(itemRef, {
        name: editItem.name.trim(),
        price: editItem.price,
      });
      setEditItem(null); // Setelah berhasil mengupdate, reset editItem ke null
      setIsEditing(false); // Set isEditing ke false
    }
  };

  return (
    <main className="bg-white ">
      <div className="min-h-screen z-10 w-full max-w-5xl items-center justify-between text-sm ">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center w-screen py-8 px-12 xl:px-24 lg:px-18 md:px-12 md:py-12 sm:px-8 sm:py-8">
          <div className="md:w-1/2 flex flex-col justify-center space-y-4 xl:space-y-8 xl:py-24 lg:space-y-8 lg:py-24 md:space-y-4 sm:space-y-4">
            <div className="text-black font-bold text-5xl xl:w-2/3 xl:text-7xl lg:w-2/3 lg:text-6xl md:w-4/5 md:text-5xl sm:w-4/5 sm:text-4xl">
              Our Expense Tracker
            </div>
            <p className="text-black text-xs lg:text-lg md:text-sm sm:text-sm sm:w-3/4">
              Discover the power of 'Our Expense Tracker' and take control of
              your finances like never before.
            </p>
            <div className="flex flex-wrap space-x-2">
              <button className="text-white bg-[#3461FF] font-medium rounded-full text-xs px-6 py-4 lg:h-12 lg:px-6 md:h-8 md:text-sm md:px-4 sm:h-6">
                Lets Track
              </button>
            </div>
          </div>
          <div className="shadow-2xl bg-white rounded-lg items-center justify-between p-6 h-min">
            <form className="grid grid-cols-6 items-center text-black ">
              <input
                value={
                  isEditing ? (editItem ? editItem.name : "") : newItem.name
                }
                className="col-span-3 p-3 border rounded-lg hover:border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                onChange={(e) =>
                  isEditing && editItem
                    ? setEditItem({ ...editItem, name: e.target.value })
                    : setNewItem({ ...newItem, name: e.target.value })
                }
              />
              <input
                type="number"
                value={
                  isEditing ? (editItem ? editItem.price : "") : newItem.price
                }
                className="col-span-2 p-3 border mx-3 rounded-lg hover:border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                onChange={(e) =>
                  isEditing && editItem
                    ? setEditItem({ ...editItem, price: e.target.value })
                    : setNewItem({ ...newItem, price: e.target.value })
                }
              />
              <button
                onClick={isEditing ? updateItem : addItem}
                className="bg-[#3461FF] text-white  p-3 text-xl rounded-lg"
                type="submit"
              >
                {isEditing ? "Update" : "+"}
              </button>
            </form>
            <ul>
              {items.map((item, id) => (
                <li
                  id="items"
                  key={id}
                  className="my-4 w-full flex justify-between"
                >
                  <div className="text-black p-4 w-full flex justify-between rounded-lg col-span-3 border">
                    <span className="capitalize">{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setEditItem(item);
                    }}
                    className="bg-[#808080] ml-3 w-20 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-[#ff3d47] ml-3 w-20 rounded-lg"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            {items.length < 1 ? (
              ""
            ) : (
              <div className="flex justify-between p-3 text-black">
                <span>Total</span>
                <span>${total}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
