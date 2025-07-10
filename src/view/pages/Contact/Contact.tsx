// src/view/pages/Contact/Contact.tsx
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store.ts'; // Import typed dispatch
import { submitContact, resetSubmitStatus } from '../../../slice/contactSlice';
import { RootState } from '../../../slice/rootReducer';

type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {
    const dispatch = useAppDispatch(); // Use typed dispatch
    const { loading, error, submitSuccess } = useSelector((state: RootState) => state.contact);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        dispatch(submitContact(data)); // No more 'as any'
    };

    useEffect(() => {
        if (submitSuccess) {
            reset();
            setTimeout(() => {
                dispatch(resetSubmitStatus());
            }, 3000);
        }
    }, [submitSuccess, reset, dispatch]);

    return(
        <div className="max-w-[500px] mx-auto my-10 p-8 bg-white-800 rounded-xl shadow-4xl border-2 border-green-500">
            <h2 className="text-4xl font-bold mb-6 text-green-500 text-center underline decoration-4 mb-6">Contact Us</h2>

            {submitSuccess && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                    Contact submitted successfully!
                </div>
            )}

            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center">
                    <label className="mb-1 font-semibold text-2xl">Email:</label>
                    <input
                        type="email"
                        className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Valid email is required'
                            }
                        })}
                    />
                    {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col items-center">
                    <label className="mb-1 font-semibold text-2xl">Subject:</label>
                    <input
                        type="text"
                        className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('subject', {
                            required: 'Subject is required',
                            minLength: {
                                value: 2,
                                message: 'Subject must be at least 2 characters long'
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
                            required: 'Message is required',
                            minLength: {
                                value: 10,
                                message: 'Message must be at least 10 characters long'
                            }
                        })}
                    />
                    {errors.message && <span className="text-red-600 text-sm mt-1">{errors.message.message}</span>}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`py-3 px-2 font-medium rounded transition-colors mt-2 cursor-pointer ${
                        loading
                            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}