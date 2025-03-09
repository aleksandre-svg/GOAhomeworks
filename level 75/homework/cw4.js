const students = {
    fullName : 'aleksandre dzukaevi',
    scores : [30, 20, 40, 10, 25, 80],
    averageScore : function(scores){
        let sum = 0
        let leng = scores.length
        for (let element of scores){
            sum+=element
        }
        return Math.round(sum/leng)
    },
    checkStudent : function(aver){
        if (aver >= 90){
            return 'საუკეთესო სტუდენტი'
        }else if (aver < 90 && aver >= 60){
            return 'კარგი მოსწავლე'
        }else {
            return 'ნორმალური მოსწავლე'
        }
    }
}
students.aver = students.averageScore(students.scores)
students.goodOrNot = students.checkStudent(students.averageScore(students.scores))
console.log(students)