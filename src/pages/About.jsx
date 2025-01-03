import React from 'react'
import kunal from '../assets/about/kunal.jpeg';
import rohit from '../assets/about/rohit.jpg';
import Swal from 'sweetalert2'
function About() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c2b2041a-9673-4a21-970d-54ca6d4d1f59");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });


        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    //Team-Details
    const team = [
        {
            avatar: kunal,
            name: "Kunal Pandhare",
            title: "Full Stack Developer",
            desc: "Kunal",
            linkedin: "https://linkedin.com/in/kunalpandhare/",
            twitter: "https://x.com/ikunalpn",
            github: "https://github.com/ikunalpn"
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/125188641?v=4",
            name: "Mukul Kendre",
            title: "Full Stack Developer",
            desc: "Mukul",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: rohit,
            name: "Rohit Pandhare",
            title: "Full Stack Developer",
            desc: "Rohit",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://avatars.githubusercontent.com/u/116179986?v=4",
            name: "Kinjan Parkar",
            title: "Full Stack Developer",
            desc: "Kinjan",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
    ]

    return (
        <>
            <div style={{ backgroundColor: '#111827' }} className='p-10'>
                <section className="py-14 slide-in" style={{ backgroundColor: '#111827' }}>
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <section className="flex items-center justify-center bg-gray-900">
                            <div className="max-w-xl text-center">
                                <h3
                                    // className="text-white text-3xl font-semibold sm:text-4xl" 
                                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                                    Meet our talent team
                                </h3>
                                <p className="text-gray-300 mt-3">
                                    We are a passionate team of developers dedicated to crafting innovative solutions and enhancing user experiences through technology.
                                </p>
                            </div>
                        </section>

                        <div className="mt-12 flex justify-center items-center">
                            <ul className="grid gap-8 lg:grid-cols-2">
                                {
                                    team.map((item, idx) => (
                                        <li key={idx} className="gap-8 sm:flex">
                                            <div
                                            // className="w-full h-60"
                                            >
                                                <img
                                                    src={item.avatar}
                                                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                                    alt=""
                                                    style={{ height: '300px', width: '300px' }}
                                                />
                                            </div>
                                            <div className="mt-4 sm:mt-0">
                                                <h4 className="text-white text-lg font-semibold">{item.name}</h4>
                                                <p className="text-teal-400">{item.title}</p>
                                                <p className="text-gray-300 mt-2">{item.desc}</p>
                                                <div className="mt-3 flex gap-4 text-gray-400">
                                                    <a href={item.twitter} target='_blank'>
                                                        <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                    </a>
                                                    <a href={item.github} target='_blank'>
                                                        <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g fill="currentColor" clip-path="url(#clip0_910_44)"><path fill-rule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z" clip-rule="evenodd" /><path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" /></g><defs><clipPath id="clip0_910_44"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                    </a>
                                                    <a href={item.linkedin} target='_blank'>
                                                        <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>
                <div className='flex-col justify-center items-center p-5'>
                    <div className='flex justify-center items-center mb-5'>
                        <h3
                            // className="text-white text-3xl font-semibold sm:text-4xl" 
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                            Contact Us
                        </h3>

                    </div>
                    {/* <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md" >

                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div> */}
                    <div className="bg-gradient-to-r from-blue-300 to-purple-500 h-screen flex justify-center items-center rounded-xl">
                        <div className="py-8 px-6 bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter w-2/6"> {/* Changed max-w-md to max-w-xl */}

                            <h1 className="text-xl font-extrabold text-center text-gray-800 mb-5">Fill below detail to Contact us</h1>

                            <form onSubmit={onSubmit} className="flex flex-col">

                                <div className="mb-5">
                                    <label className="text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="text-gray-700 font-semibold mb-2" htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal"
                                        rows="4"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5"
                                >
                                    Send Message
                                </button>

                            </form>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default About