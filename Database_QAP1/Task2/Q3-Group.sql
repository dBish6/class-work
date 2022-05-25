SELECT actor_id, first_name, last_name FROM public.actor

WHERE first_name LIKE 'B%'

GROUP BY actor_id;