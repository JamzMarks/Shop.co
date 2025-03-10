import { useState, useEffect } from "react";
import { Review } from "../types/review.interface";
import { getReviewByProductId } from "../services/dataService";

const PAGE_SIZE = 6;

export function useReviews(productId: number) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchReviews = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await getReviewByProductId(productId, cursor, PAGE_SIZE);

      if (response.length > 0) {
        setReviews((prev) => [...prev, ...response]);
        setCursor(response[response.length - 1].id);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Erro ao buscar reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setReviews([]);
    setCursor(null);
    setHasMore(true);
    fetchReviews();
  }, [productId]);

  return { reviews, fetchReviews, hasMore, loading };
}
