SELECT actor_id, first_name, last_name, length(last_name) AS last_name_length
FROM public.actor

WHERE first_name LIKE 'B%' AND LENGTH(last_name) BETWEEN 4 AND 6
OR first_name LIKE 'Z%'