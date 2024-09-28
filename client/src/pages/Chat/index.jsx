import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { getMessages } from "../../redux/slices/messageSlice";
import { Formik, Form, Field } from "formik";
import { sendMessage } from "../../api/ws";

const initialValues = {
  body: "",
};

function ChatPage() {
  const { user, messages, isLoading, error } = useSelector((state) => ({
    ...state.message,
    user: state.auth.user,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  const handleSubmit = (values, formikBag) => {
    const newMessageData = {
      ...values,
      user,
    };
    sendMessage(newMessageData);

    formikBag.resetForm();
  };

  const messagesListItems = messages.map((message) => (
    <li key={message._id}>
      <pre>{JSON.stringify(message, null, 4)}</pre>
    </li>
  ));

  return (
    <div>
      <Header />
      <h1>Chat page</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="body" />
          <button type="submit">Send message</button>
        </Form>
      </Formik>
      <ul>{messagesListItems}</ul>
    </div>
  );
}

export default ChatPage;
