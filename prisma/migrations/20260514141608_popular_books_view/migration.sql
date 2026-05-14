-- This is an empty migration.
CREATE VIEW "PopularBook" AS
SELECT b.id, b.title, AVG(r.rating) AS "averageRating"
FROM "Book" b
JOIN "Review" r ON r."bookId" = b.id
GROUP BY b.id, b.title
HAVING AVG(r.rating) > 4;