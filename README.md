# Welcome to monday-u Zoo!



![](https://i.ytimg.com/vi/6_zFLsW7z2E/maxresdefault.jpg)




**The code is not clean on purpose and violates a lot of rules.**

Through adding new features you will be forced to refactor the code.
This workshop is **longer** than you can imagine and there are **no(!)** expectations that you will complete it today.

Also - No official homework this week so we ask you:

* Please complete the workshop at home
* Please do code reviews to each other to practice and learn

## The Zoo 1.0

Ever since we got our first llama our drean was to open a monday zoo

In the monday-u-zoo we have 2 main entities: **Animals** and **Caretakers**.

### Animals
We have 4 type of animals:
**Dogs, Cats, Sharks** and **Tigers**. - No llamas.

Each animal has a name, and we can have multiple or no animals of each type in the ****zoo****.

### Caretakers
Zoo Caretakers are responsible for feeding the animals and are paid per feed.
Each animal type can eat only 1 particular type of food, and we have a food storage to keep track of food inventory.

### Main (index.ts)
In the program in front of you (index.ts) we created a simulation run of the zoo:
As Long as we have food in the storage we pick a random caretaker and a random animal and attempt a feeding. If the feeding is successful we update the storage and update the caretaker's salary.


## Feature List

**Complete in order**

#### Feature 1

We want to grow the zoo add a new animal Rabbit with favorite food Carrot - without refactoring the code

#### Feature 2

Animals need more than just food - they need some love. So you are asked to add new functionality “petting”. We allow to pet only non-dangerous animals (Not sharks and tigers).

#### Feature 3

Zoo management would like to monitor the mental and physical health of the animals to do that we defined what is a happy animal:
* A cat is happy if it was fed, and if it was pet in the last hour
* A dog is always happy
* A shark is never happy
* A tiger is happy if it was fed today
* A rabbit is always happy
* A monkey is happy only if it has eate	n 3 bananas or more
* A dog is always happy

write the and refactor the code to support this

#### Feature 4

We are still growing and want to add monkeys to the zoo favorite food is banana - now you can refactor if you hadn’t already

#### Feature 5

Ok so turns out Gorillas are dangerous! 

#### Feature 6

We opened the workforce for Volunteers as well. Volunteers can pet animals but not feed them and obviously are not being paid.

#### Feature 7

We would like to enhance the “end of run” report
* For all caretakers the total salary received
* For each animal the number of feedings it got
* A report of starved animals (not fed at all)
* Happiness report for each animal is it happy or not
