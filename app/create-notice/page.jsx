"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import NoticeForm from "@components/NoticeForm";

const createNotice = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState({ notice: "", tag: "" });

  const createNotice = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/notice/new", {
        method: "POST",
        body: JSON.stringify({
          notice: notice.notice,
          userId: session?.user.id,
          tag: notice.tag,
          department: notice.department,
          details: notice.details,
          school: notice.school,
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
      handleSubmit={createNotice}
    />
  );
};

export default createNotice;
