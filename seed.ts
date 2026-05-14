import { prisma } from "./lib/prisma";

// ── Static data ───────────────────────────────────────────────────────────────

const PUBLISHERS = [
  "Penguin Random House",
  "HarperCollins",
  "Simon & Schuster",
  "Macmillan Publishers",
  "Hachette Book Group",
  "Oxford University Press",
];

const AUTHORS = [
  { name: "George Orwell",           email: "george.orwell@authors.com" },
  { name: "J.K. Rowling",            email: "jk.rowling@authors.com" },
  { name: "Stephen King",            email: "stephen.king@authors.com" },
  { name: "Agatha Christie",         email: "agatha.christie@authors.com" },
  { name: "Ernest Hemingway",        email: "ernest.hemingway@authors.com" },
  { name: "F. Scott Fitzgerald",     email: "fscott.fitzgerald@authors.com" },
  { name: "Toni Morrison",           email: "toni.morrison@authors.com" },
  { name: "Gabriel Garcia Marquez",  email: "gabriel.marquez@authors.com" },
  { name: "Haruki Murakami",         email: "haruki.murakami@authors.com" },
  { name: "Jane Austen",             email: "jane.austen@authors.com" },
];

const GENRES = [
  "Fiction", "Non-Fiction", "Science Fiction",
  "Fantasy", "Mystery", "Thriller", "Romance", "Biography",
];

interface BookSeed {
  title: string;
  authorName: string;
  publisherName: string;
  genreNames: string[];
}

const BOOKS: BookSeed[] = [
  { title: "1984",                              authorName: "George Orwell",          publisherName: "Penguin Random House", genreNames: ["Fiction", "Science Fiction"] },
  { title: "Animal Farm",                       authorName: "George Orwell",          publisherName: "Penguin Random House", genreNames: ["Fiction"] },
  { title: "Homage to Catalonia",               authorName: "George Orwell",          publisherName: "Penguin Random House", genreNames: ["Non-Fiction"] },
  { title: "Harry Potter and the Philosopher's Stone", authorName: "J.K. Rowling",   publisherName: "HarperCollins",        genreNames: ["Fantasy", "Fiction"] },
  { title: "Harry Potter and the Chamber of Secrets",  authorName: "J.K. Rowling",   publisherName: "HarperCollins",        genreNames: ["Fantasy", "Fiction"] },
  { title: "Harry Potter and the Prisoner of Azkaban", authorName: "J.K. Rowling",   publisherName: "HarperCollins",        genreNames: ["Fantasy", "Fiction"] },
  { title: "The Shining",                       authorName: "Stephen King",           publisherName: "Simon & Schuster",     genreNames: ["Fiction", "Thriller"] },
  { title: "It",                                authorName: "Stephen King",           publisherName: "Simon & Schuster",     genreNames: ["Fiction", "Thriller"] },
  { title: "Carrie",                            authorName: "Stephen King",           publisherName: "Simon & Schuster",     genreNames: ["Fiction", "Thriller"] },
  { title: "Murder on the Orient Express",      authorName: "Agatha Christie",        publisherName: "HarperCollins",        genreNames: ["Mystery", "Fiction"] },
  { title: "And Then There Were None",          authorName: "Agatha Christie",        publisherName: "HarperCollins",        genreNames: ["Mystery", "Thriller"] },
  { title: "The ABC Murders",                   authorName: "Agatha Christie",        publisherName: "HarperCollins",        genreNames: ["Mystery"] },
  { title: "The Old Man and the Sea",           authorName: "Ernest Hemingway",       publisherName: "Penguin Random House", genreNames: ["Fiction"] },
  { title: "A Farewell to Arms",                authorName: "Ernest Hemingway",       publisherName: "Penguin Random House", genreNames: ["Fiction", "Romance"] },
  { title: "For Whom the Bell Tolls",           authorName: "Ernest Hemingway",       publisherName: "Penguin Random House", genreNames: ["Fiction"] },
  { title: "The Great Gatsby",                  authorName: "F. Scott Fitzgerald",    publisherName: "Macmillan Publishers", genreNames: ["Fiction", "Romance"] },
  { title: "Tender is the Night",               authorName: "F. Scott Fitzgerald",    publisherName: "Macmillan Publishers", genreNames: ["Fiction", "Romance"] },
  { title: "This Side of Paradise",             authorName: "F. Scott Fitzgerald",    publisherName: "Macmillan Publishers", genreNames: ["Fiction"] },
  { title: "Beloved",                           authorName: "Toni Morrison",          publisherName: "Hachette Book Group",  genreNames: ["Fiction"] },
  { title: "Song of Solomon",                   authorName: "Toni Morrison",          publisherName: "Hachette Book Group",  genreNames: ["Fiction"] },
  { title: "The Bluest Eye",                    authorName: "Toni Morrison",          publisherName: "Hachette Book Group",  genreNames: ["Fiction"] },
  { title: "One Hundred Years of Solitude",     authorName: "Gabriel Garcia Marquez", publisherName: "Macmillan Publishers", genreNames: ["Fiction", "Fantasy"] },
  { title: "Love in the Time of Cholera",       authorName: "Gabriel Garcia Marquez", publisherName: "Macmillan Publishers", genreNames: ["Fiction", "Romance"] },
  { title: "Chronicle of a Death Foretold",     authorName: "Gabriel Garcia Marquez", publisherName: "Macmillan Publishers", genreNames: ["Fiction", "Mystery"] },
  { title: "Norwegian Wood",                    authorName: "Haruki Murakami",        publisherName: "Hachette Book Group",  genreNames: ["Fiction", "Romance"] },
  { title: "Kafka on the Shore",                authorName: "Haruki Murakami",        publisherName: "Hachette Book Group",  genreNames: ["Fiction", "Fantasy"] },
  { title: "The Wind-Up Bird Chronicle",        authorName: "Haruki Murakami",        publisherName: "Hachette Book Group",  genreNames: ["Fiction"] },
  { title: "1Q84",                              authorName: "Haruki Murakami",        publisherName: "Hachette Book Group",  genreNames: ["Fiction", "Science Fiction", "Fantasy"] },
  { title: "Pride and Prejudice",               authorName: "Jane Austen",            publisherName: "Oxford University Press", genreNames: ["Fiction", "Romance"] },
  { title: "Sense and Sensibility",             authorName: "Jane Austen",            publisherName: "Oxford University Press", genreNames: ["Fiction", "Romance"] },
  { title: "Emma",                              authorName: "Jane Austen",            publisherName: "Oxford University Press", genreNames: ["Fiction", "Romance"] },
  { title: "Northanger Abbey",                  authorName: "Jane Austen",            publisherName: "Oxford University Press", genreNames: ["Fiction", "Mystery"] },
];

// 20 first names × 10 last names = 200 unique users
const FIRST_NAMES = [
  "James", "Emma", "Oliver", "Sophia", "Liam", "Ava", "Noah", "Isabella",
  "William", "Mia", "Benjamin", "Charlotte", "Elijah", "Amelia", "Lucas",
  "Harper", "Mason", "Evelyn", "Logan", "Abigail",
];
const LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Brown", "Jones",
  "Garcia", "Miller", "Davis", "Wilson", "Moore",
];

const COMMENT_TEXTS = [
  "A masterpiece that completely changed my perspective.",
  "Couldn't put it down, read it in one sitting.",
  "The character development was outstanding.",
  "A bit slow in the middle but the ending was worth it.",
  "One of the best books I've ever read.",
  "The writing style took some getting used to but the story was compelling.",
  "Highly recommend this to anyone who loves the genre.",
  "The plot twists were unexpected and brilliant.",
  "A classic for a reason — timeless themes.",
  "The dialogue felt very natural and authentic.",
  "Some parts dragged but overall an excellent read.",
  "The author's imagination is truly remarkable.",
  "This book made me think long after I finished it.",
  "Beautiful prose and a captivating story.",
  "A disappointing follow-up to the author's earlier work.",
  "The world-building is incredibly detailed.",
  "Simple language but profound ideas.",
  "I found the ending somewhat unsatisfying.",
  "An emotional rollercoaster from start to finish.",
  "The pacing was perfect throughout.",
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function pickMany<T>(arr: T[], min: number, max: number): T[] {
  const count = randInt(min, max);
  return [...arr].sort(() => Math.random() - 0.5).slice(0, Math.min(count, arr.length));
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {

    // ── Clean ──────────────────────────────────────────────────────────────────
  console.log("Cleaning database...");
  await prisma.comment.deleteMany();
  await prisma.review.deleteMany();
  await prisma.book.deleteMany();
  await prisma.genre.deleteMany();
  await prisma.user.deleteMany();
  await prisma.author.deleteMany();
  await prisma.publisher.deleteMany();

  // ── 1. Publishers ──────────────────────────────────────────────────────────
  const publishers = await Promise.all(
    PUBLISHERS.map((name) => prisma.publisher.create({ data: { name } }))
  );
  const publisherMap = Object.fromEntries(publishers.map((p) => [p.name, p]));
  console.log(`Created ${publishers.length} publishers`);

  // ── 2. Authors ─────────────────────────────────────────────────────────────
  const authors = await Promise.all(
    AUTHORS.map((a) => prisma.author.create({ data: a }))
  );
  const authorMap = Object.fromEntries(authors.map((a) => [a.name, a]));
  console.log(`Created ${authors.length} authors`);

  // ── 3. Genres ──────────────────────────────────────────────────────────────
  const genres = await Promise.all(
    GENRES.map((name) => prisma.genre.create({ data: { name } }))
  );
  const genreMap = Object.fromEntries(genres.map((g) => [g.name, g]));
  console.log(`Created ${genres.length} genres`);

  // ── 4. Users (200) ─────────────────────────────────────────────────────────
  const userNames = FIRST_NAMES.flatMap((first) =>
    LAST_NAMES.map((last) => `${first} ${last}`)
  );
  const users = await Promise.all(
    userNames.map((name) => prisma.user.create({ data: { name } }))
  );
  console.log(`Created ${users.length} users`);

  // ── 5. Books (32) ──────────────────────────────────────────────────────────
  const books = await Promise.all(
    BOOKS.map((b) =>
      prisma.book.create({
        data: {
          title: b.title,
          authorId: authorMap[b.authorName].id,
          publisherId: publisherMap[b.publisherName].id,
          genres: { connect: b.genreNames.map((g) => ({ id: genreMap[g].id })) },
        },
      })
    )
  );
  console.log(`Created ${books.length} books`);

  // ── 6. Reviews ─────────────────────────────────────────────────────────────
  // Each user reviews 2–5 random books; unique per user+book pair
  const reviewPairs = new Set<string>();
  const reviewsData: { userId: string; bookId: string; rating: number }[] = [];

  for (const user of users) {
    for (const book of pickMany(books, 2, 5)) {
      const key = `${user.id}:${book.id}`;
      if (!reviewPairs.has(key)) {
        reviewPairs.add(key);
        reviewsData.push({ userId: user.id, bookId: book.id, rating: randInt(1, 5) });
      }
    }
  }

  const reviews = await Promise.all(
    reviewsData.map((data) => prisma.review.create({ data }))
  );
  console.log(`Created ${reviews.length} reviews`);

  // ── 7. Comments ────────────────────────────────────────────────────────────
  const commentsData = reviews.flatMap((review) =>
    Array.from({ length: randInt(0, 3) }).map(() => ({
      comment: pick(COMMENT_TEXTS),
      reviewId: review.id,
    }))
  );

  const comments = await Promise.all(
    commentsData.map((data) => prisma.comment.create({ data }))
  );
  console.log(`Created ${comments.length} comments`);

  // ── 8. Special entry ───────────────────────────────────────────────────────
  const jeanluc = await prisma.user.create({ data: { name: "jeanluc" } });

  const chrisBook = await prisma.book.create({
    data: {
      title: "Chris best instructor",
      authorId: pick(authors).id,
      publisherId: pick(publishers).id,
    },
  });

  const jeanlucReview = await prisma.review.create({
    data: { userId: jeanluc.id, bookId: chrisBook.id, rating: 5 },
  });

  await prisma.comment.create({
    data: { comment: "please give me 10/10", reviewId: jeanlucReview.id },
  });

  console.log(`Created special book "${chrisBook.title}" with review from ${jeanluc.name}`);

  console.log("Done!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
