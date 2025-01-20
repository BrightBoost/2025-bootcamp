1. SELECT * FROM sakila.film 
WHERE title LIKE "B%";

2. SELECT * FROM sakila.country 
ORDER BY country DESC;

3. SELECT DISTINCT city_Id, district FROM sakila.address;

4. SELECT * FROM sakila.actor
WHERE first_name LIKE "B%" AND last_name LIKE "N%";

5. SELECT * FROM sakila.film
WHERE rental_rate BETWEEN 3 and 4;

6. SELECT * FROM sakila.film
WHERE description LIKE "%scientist%";

7. SELECT * FROM sakila.film
WHERE language_id = 1;