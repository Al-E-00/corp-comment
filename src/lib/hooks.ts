import { useContext, useEffect, useState } from "react";
import { FeedbackItemContext } from "../components/context/FeedbackItemsContextProvider";
import { TFeedbackItem } from "./types";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemContext);
  if (!context) {
    throw new Error(
      "useFeedbackItemsContext must be used within a FeedbackItemsContextProvider"
    );
  }

  return context;
}

export function useFeedbackItems() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const fetchFeedbackItems = async () => {
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbackItems();
  }, []);

  return { feedbackItems, isLoading, errorMessage };
}
