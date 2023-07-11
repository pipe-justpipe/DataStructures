//PROBLEM 1

/*Initialize an empty array called distinctElements to store the distinct elements.
Read the elements of Set 1 and Set 2 into separate arrays.
Initialize a variable sum to 0 to store the sum of distinct elements.
Iterate over the elements of Set 1:
If the current element is not already present in the distinctElements array, add it to the array and update the sum by adding the current element's value.
Iterate over the elements of Set 2:
If the current element is not already present in the distinctElements array, add it to the array and update the sum by adding the current element's value.
Print the value of sum, which represents the sum of all distinct elements.*/

//Pseudocode
 /*
  function findDistinctSum(set1, set2):
    distinctElements = empty array
    sum = 0
    
    for element in set1:
        if element not in distinctElements:
            add element to distinctElements
            sum = sum + element
    
    for element in set2:
        if element not in distinctElements:
            add element to distinctElements
            sum = sum + element
    
    return sum
  */

function findDistinctSum(set1, set2) {
    let distinctElements = [];
    let sum = 0;
  
    for (let element of set1) {
      if (!distinctElements.includes(element)) {
        distinctElements.push(element);
        sum += element;
      }
    }
  
    for (let element of set2) {
      if (!distinctElements.includes(element)) {
        distinctElements.push(element);
        sum += element;
      }
    }
  
    return sum;
  }
  
  // Example usage:
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  
  const distinctSum = findDistinctSum(set1, set2);
  console.log("Distinct Sum:", distinctSum);
 



  //PROBLEM 2

  /**
   Procedure: dot_product(v1, v2)
    Initialize variable ps to 0
    For i from 0 to length of v1 - 1
        Multiply the ith element of v1 with the ith element of v2 and add the result to ps
    End For
    Return ps
End Procedure

Algorithm: CheckOrthogonality(n, vectors)
    For each pair of vectors (v1, v2) in vectors
        Calculate dot product using dot_product procedure: 
        Set dp = dot_product(v1, v2)
        If dp is equal to 0
            Print "Vectors v1 and v2 are orthogonal"
        Else
            Print "Vectors v1 and v2 are not orthogonal"
        End If
    End For
End Algorithm

Algorithm: CheckOrthogonalityWithFunction(n, vectors)
    Function: dot_product(v1, v2)
        Initialize variable ps to 0
        For i from 0 to length of v1 - 1
            Multiply the ith element of v1 with the ith element of v2 and add the result to ps
        End For
        Return ps
    End Function

    For each pair of vectors (v1, v2) in vectors
        Calculate dot product using dot_product function: 
        Set dp = dot_product(v1, v2)
        If dp is equal to 0
            Print "Vectors v1 and v2 are orthogonal"
        Else
            Print "Vectors v1 and v2 are not orthogonal"
        End If
    End For
End Algorithm
*/