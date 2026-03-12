const pages = [

    { name: "Sword Weapons", url: "weapons/displayWeapons.php_class_any_type_sword.html" },
    { name: "Staff Weapons", url: "weapons/displayWeapons.php_class_any_type_staff.html" },
    { name: "Bow Weapons", url: "weapons/displayWeapons.php_class_any_type_bow.html" },
    
    { name: "Warrior Armor", url: "armor/displayArmor.php_class_warrior.html" },
    { name: "Mage Armor", url: "armor/displayArmor.php_class_mage.html" },
    
    { name: "Fishing Tools", url: "tools/displayTools.php_gatheringType_fishing.html" },
    { name: "Mining Tools", url: "tools/displayTools.php_gatheringType_mining.html" }
    
    ]
    
    const input = document.getElementById("search")
    const results = document.getElementById("results")
    
    input.addEventListener("input", () => {
    
    results.innerHTML = ""
    
    const q = input.value.toLowerCase()
    
    pages
    .filter(p => p.name.toLowerCase().includes(q))
    .forEach(p => {
    
    const li = document.createElement("li")
    const a = document.createElement("a")
    
    a.href = p.url
    a.textContent = p.name
    
    li.appendChild(a)
    results.appendChild(li)
    
    })
    
    })
    