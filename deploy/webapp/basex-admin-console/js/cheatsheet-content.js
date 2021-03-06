cheatSheetContent = "string-join(distinct-values(db:open('Release-Canonicals-Archive')//observation/@type),'&#10;')\n\n"
                          + "(: FLWOR Expression: :) \n"
                  + "for $country in db:open('factbook')//country\n"
                  + "where $country/@population > 100000000\n"
                  + "let $name := $country/name[1]\n"
                  + "for $city in $country//city[population > 1000000]\n"
                  + "group by $name\n"
                  + "return <country name='{ $name }'>{ $city/name }</country>\n\n"
                  + "(: Simple map notation :)\n"
                  + "(1 to 10) ! element node { . },\n"
                  + "(: FLWOR notation :)\n"
                  +  "for $i in 1 to 10\n"
                  +  "return element node { $i } \n\n"
                  + "(: Try/Catch :) \n"
                  + "try {\n"
                  + "   1 + '2'\n"
                  + "} catch err:XPTY0004 {\n"
                  + "   'Typing error: ' || $err:description\n"
                  + "} catch * {\n"
                  + "  'Error [' || $err:code || ']: ' || $err:description\n"
                  + "}\n\n"
                  + "(: Switch :)\n"
                  + "for $fruit in ('Apple', 'Pear', 'Peach')\n"
                  + " return switch ($fruit)\n"
                  + "    case 'Apple' return 'red'\n"
                  + "    case 'Pear'  return 'green'\n"
                  + "    case 'Peach' return 'pink'\n"
                  + "    default      return 'unknown'\n\n";