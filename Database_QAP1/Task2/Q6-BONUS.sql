SELECT customer.customer_id, first_name || ' ' || last_name AS full_name, 
SUM(amount) FROM customer

JOIN payment ON customer.customer_id = payment.customer_id

WHERE first_name LIKE 'B%' OR first_name LIKE 'Z%'
GROUP BY customer.customer_id, full_name
ORDER BY customer_id;
