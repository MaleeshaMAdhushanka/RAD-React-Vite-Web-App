// import './Contact.css'
import {useForm} from "react-hook-form";
//define generic type
type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Form data Submited: ', data);
        alert(`Submitted you case : ${data.subject}`);
    }

    return(
        <div className="max-w-[500px] mx-auto my-10 p-8 bg-white-800 rounded-xl shadow-4xl border-2  border-green-500">
            <h2 className="text-4xl font-bold mb-6 text-green-500 text-center underline decoration-4 mb-6">Contact Us</h2>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center">
                    <label className="mb-1 font-semibold text-2xl">Email:</label>
                    <input
                        type="email"
                        className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('email', {
                            required: 'Email is required',
                            pattern:{
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col items-center">
                    <label className="mb-1 font-semibold text-2xl ">Subject:</label>
                    <input
                        type="text"
                        className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('subject', {
                            required: 'Subject is required',
                            pattern: {
                                value: /^[a-zA-Z0-9\s]+$/,
                                message: 'Subject can only contain letters and numbers'
                            }
                        })}
                    />
                    {errors.subject && <span className="text-red-600 text-sm mt-1">{errors.subject.message}</span>}
                </div>

                <div className="flex flex-col items-center">
                    <label className="mb-1 font-semibold text-2xl">Message:</label>
                    <textarea
                        rows={5}
                        className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('message', {
                            required: 'Message is required'
                        })}
                    />
                    {errors.message && <span className="text-red-600 text-sm mt-1">{errors.message.message}</span>}
                </div>

                <button
                    type="submit"
                    className="py-3 px-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors mt-2 cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}