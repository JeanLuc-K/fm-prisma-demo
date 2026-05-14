CREATE VIEW "BookRatings" AS
SELECT
  b.id          AS "bookId",
  b.title,
  COUNT(r.id)   AS "reviewCount",
  ROUND(AVG(r.rating)::numeric, 2) AS "averageRating",
  MIN(r.rating) AS "minRating",
  MAX(r.rating) AS "maxRating"
FROM "Book" b
LEFT JOIN "Review" r ON r."bookId" = b.id
GROUP BY b.id, b.title
ORDER BY "averageRating" DESC NULLS LAST;