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
    <div className="lg:ml-[13rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          {...register('name', {
            required: { value: true, message: '*Name is required' },
          })}
          />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          {...register('email', {
            required: { value: true, message: '*Email is required' },
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '*Introduce a valid Email' },
          })}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <textarea 
          placeholder="Enter a message..."
          name="message"
          {...register('message', {
            required: { value: true, message: '*Write something :D' },
          })}
        />
        {errors.message?.message && <p>{errors.message.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
