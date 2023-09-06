"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import NoticeForm from "@components/NoticeForm";

const Updatenotice = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const noticeId = searchParams.get("id");

  const [notice, setNotice] = useState({ notice: "", tag: "", });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getNoticeDetails = async () => {
      const response = await fetch(`/api/notice/${noticeId}`);
      const data = await response.json();

      setNotice({
        notice: data.notice,
        tag: data.tag,
      });
    };

    if (noticeId) getNoticeDetails();
  }, [noticeId]);

  const updateNotice = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!noticeId) return alert("Missing noticeId!");

    try {
      const response = await fetch(`/api/notice/${noticeId}`, {
        method: "PATCH",
        body: JSON.stringify({
          notice: notice.notice,
          tag: notice.tag,
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
      type='Edit'
      notice={notice}
      setNotice={setNotice}
      submitting={submitting}
      handleSubmit={updateNotice}
    />
  );
};

export default Updatenotice;
