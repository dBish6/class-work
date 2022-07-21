SELECT customer_id, first_name ||' '|| last_name as full_name, 
rental_date, return_date, title FROM customer

INNER JOIN rental USING(customer_id)
INNER JOIN inventory USING(inventory_id)
INNER JOIN film using(film_id)

WHERE rental_date > CURRENT_DATE - INTERVAL '12 months'