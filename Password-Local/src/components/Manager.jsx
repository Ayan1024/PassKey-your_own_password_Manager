import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

function Manager() {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArry, setpasswordArry] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArry(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const showpassword = () => {
    if (ref.current.src.includes("icons/close.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/close.png";
      passwordRef.current.type = "text";
    }
  };

  const savepassword = () => {
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){
    const updated = [...passwordArry, { ...form, id: uuidv4() }];
    setpasswordArry(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));
    setform({ site: "", username: "", password: "" });

    toast("Data Saved!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  }
  else{
    toast("Put a valid input!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  }
    };

  const editpassword = (id) => {
    setform(passwordArry.filter((i) => i.id === id)[0]);
    const updated = passwordArry.filter((item) => item.id !== id);
    setpasswordArry(updated);
  };

  const deletepassword = (id) => {
    // let c = confirm("Are you sure? It can't be undone");
    // if (c) {
      const updated = passwordArry.filter((item) => item.id !== id);
      setpasswordArry(updated);
      localStorage.setItem("passwords", JSON.stringify(updated));

      toast("Data Deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    // }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />

      <div className="relative min-h-screen w-full bg-slate-950 overflow-x-hidden overflow-y-auto hide-scrollbar">

        {/* Background gradients */}
        <div className="absolute -top-1/4 -left-1/4 h-[150%] w-[150%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),transparent)] pointer-events-none z-0" />
        <div className="absolute -top-1/4 -right-1/4 h-[150%] w-[150%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),transparent)] pointer-events-none z-0" />

        {/* Title */}
        <div className="flex justify-center items-center flex-col text-white m-6">
          <p className="text-xl">Your own password Manager</p>
        </div>

        {/* Main Form */}
        <div className="md:mt-10 rounded-xl mx-auto bg-slate-800 max-w-2xl">
          <div className="relative z-10 text-white flex flex-col gap-6 p-6 max-w-md mx-auto">
            <input
              value={form.site}
              onChange={handleChange}
              type="text"
              name="site"
              className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter Website URL..."
            />

            <div className="flex flex-col md:flex-row gap-4">
              <input
                value={form.username}
                onChange={handleChange}
                type="text"
                name="username"
                className="flex-1 px-2 py-2 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="UserName"
              />

              <div className="relative flex-1">
                <input
                  ref={passwordRef}
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  className="w-full px-2 py-2 pr-10 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Password"
                />
                <span
                  className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-2"
                  onClick={showpassword}
                >
                  <img
                    ref={ref}
                    className="p-1"
                    width={30}
                    src="icons/eye.png"
                    alt="eye"
                  />
                </span>
              </div>
            </div>

            <button
              onClick={savepassword}
              className="w-fit flex justify-center items-center gap-2 px-4 py-2 rounded-2xl self-center text-black border-black bg-purple-800"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                style={{ width: "24px", height: "24px" }}
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>

        {/* Passwords Table */}
        <div className="overflow-x-auto mt-10 p-6 rounded-xl max-w-4xl mx-auto shadow-lg bg-slate-800 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Your Passwords</h2>
          {passwordArry.length === 0 ? (
            <div className="text-center">No passwords to show</div>
          ) : (
            <table className="table-auto w-full border-collapse border border-slate-700">
              <thead className="hidden md:table-header-group">
                <tr>
                  <th className="px-4 py-2 border border-slate-700">Site</th>
                  <th className="px-4 py-2 border border-slate-700">Username</th>
                  <th className="px-4 py-2 border border-slate-700">Password</th>
                  <th className="px-4 py-2 border border-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArry.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-700 transition-colors flex flex-col md:table-row border md:border-none mb-4 md:mb-0"
                  >
                    <td className="border border-slate-700 px-4 py-2 text-white md:text-center">
                      <span className="block font-semibold md:hidden">Site:</span>
                      <a
                        href={item.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.site}
                      </a>
                    </td>

                    <td className="border border-slate-700 px-4 py-2 text-white md:text-center">
                      <span className="block font-semibold md:hidden">Username:</span>
                      <div
                        className="inline-flex items-center gap-2 cursor-pointer"
                        onClick={() => copyText(item.username)}
                      >
                        <span>{item.username}</span>
                        <lord-icon
                          src="https://cdn.lordicon.com/depeqmsz.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        ></lord-icon>
                      </div>
                    </td>

                    <td className="border border-slate-700 px-4 py-2 text-white md:text-center">
                      <span className="block font-semibold md:hidden">Password:</span>
                      <div
                        className="inline-flex items-center gap-2 cursor-pointer"
                        onClick={() => copyText(item.password)}
                      >
                        <span>{item.password}</span>
                        <lord-icon
                          src="https://cdn.lordicon.com/depeqmsz.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        ></lord-icon>
                      </div>
                    </td>

                    <td className="border border-slate-700 px-4 py-2 text-white md:text-center">
                      <span className="block font-semibold md:hidden">Actions:</span>
                      <div className="flex items-center justify-start md:justify-center gap-6">
                        <div
                          className="cursor-pointer"
                          onClick={() => editpassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            colors="primary:#000000"
                            style={{ width: "20px", height: "20px" }}
                          ></lord-icon>
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => deletepassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "20px", height: "20px" }}
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;
