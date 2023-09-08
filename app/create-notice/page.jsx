"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import NoticeForm from "@components/NoticeForm";

const createNotice = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState({ notice: "", details: "", tag: "", department: "",  school: "" });

  const createNote = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/notice/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          notice: notice.notice,
          details: notice.details,
          tag: notice.tag,
          department: notice.department,
          school: notice.school,
          noticeImage: notice.noticeImage,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NoticeForm
      type='Create'
      notice={notice}
      setNotice={setNotice}
      submitting={submitting}
      handleSubmit={createNote}
    />
  );
};

export default createNotice;
