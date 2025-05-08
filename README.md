# Interview Questions - Blog Task

## 1. Understanding the key Differences Between Interfaces and Types in TypeScript

-- TypeScript is a statically typed superset of JavaScript that offers powerful features like type-checking, interfaces, and types. As developers embrace TypeScript for large-scale applications, understanding the nuances between interfaces and types becomes essential. While they might appear similar, they serve distinct purposes and have subtle yet significant differences.

-- In this blog, We'll dive into the key differences between interfaces and types in TypeScript, helping you choose the right tool for your use case.

### 1. Syntax and Structure

-- Interface:
-- An interface in TypeScript is defined using the interface keyword. It is generally used to describe the shape of objects. Including their properties and methods.

###Type:
-- A type is defined using the type keyword. It is more flexible than an interface because it can describe not only object shapes but also unions, intersections, and other complex structures.

# 2. Difference Between any, unknown, and never in TypeScript

-- These types represent different levels of type safety in TypeScript:

## Any :

-- Opts out of type checking. Variables of this type can be assigned any value and can call any method without errors.

## Unknown :

-- Represents any value but enforces type checks before use. Safer than any.

## never:

-- Represents a value that should never occur(e.g, a function that always throws an error or an infinite loop)

# When to Use Each ?

-- Use any -> Only for quick fixes or JS migration (avoid in production).
-- Use unknown -> When dealing with dynamic data(e.g JSON.parse, API responses).
-- Use never -> For unreachable code or exhausive type checks.
