-- INNER JOIN returns and finds values that are on both sides.
-- Run either or...
SELECT first_name, last_name FROM staff
JOIN rental ON staff.staff_id = rental.staff_id

-- Many to Many Example
SELECT first_name, last_name FROM actor
JOIN film_actor ON actor.actor_id = film_actor.actor_id
JOIN film ON film_actor.film_id = film.film_id