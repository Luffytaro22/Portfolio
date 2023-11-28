import { useForm } from "react-hook-form";
import sendContact from "../redux/contact/actions/sendContact";
import { useDispatch } from "react-redux";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(sendContact(data));
  }

  return (
    <div className="flex flex-col min-h-screen justify-center text-center text-white lg:ml-[13rem] animate-show-contact">
      <h2 className="primary-font text-2xl underline text-green-500">Contact me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-6 items-center">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="formInputs"
          {...register('name', {
            required: { value: true, message: '*Name is required' },
          })}
          />
        {errors.name?.message && <p className="secondary-font">{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="formInputs"
          {...register('email', {
            required: { value: true, message: '*Email is required' },
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '*Introduce a valid Email' },
          })}
        />
        {errors.email?.message && <p className="secondary-font">{errors.email.message}</p>}
        <textarea 
          placeholder="Enter a message..."
          name="message"
          className="formInputs min-h-[4rem]"
          {...register('message', {
            required: { value: true, message: '*Write something :D' },
          })}
        />
        {errors.message?.message && <p className="secondary-font">{errors.message.message}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
