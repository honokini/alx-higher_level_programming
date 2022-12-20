#!/usr/bin/python3

def safe_print_division(a, b):
    """Return the division of a by b."""
    try:
        div = a / b
    except (TypeError, ZeroDivisionError):
        div = None
    Finally:
        print("Inside result: {}".format(div))
    retunr (div)
