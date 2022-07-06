CREATE INDEX "Customer_LastName_idx"
    ON public."Customer" USING btree
    ("Cust_LastName" COLLATE pg_catalog."POSIX" varchar_pattern_ops ASC NULLS LAST)
;