// You can add new scenarios, but make sure that there is exactly...
// * 1 "hackerCard" per scenario
// * 3 "playerCards" per scenario

var scenarios = [
  
    {
      "hackerCard": {
        "description": "I set up a fake Wi-Fi station to steal people’s email and track them online.",
        "power": 4
      },
      "playerCards": [
        {
          "description": "I never use public wifi networks.",
          "power": 5
        },
        {
          "description": "I browse the web, but I never do any personal business on a public wifi network.",
          "power": 3
        },
        {
          "description": "I connect to any wifi network I can use in public.",
          "power": 1
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I sent a fake email from your bank asking for your account details.",
        "power": 3
      },
      "playerCards": [
        {
          "description": "I checked the email address - the message didn’t come from my bank.",
          "power": 5
        },
        {
          "description": "I never give out personal information in response to an email.",
          "power": 4
        },
        {
          "description": "I sent the details you asked for so you could check on my account.",
          "power": 1
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I figured out where you live from all the personal information you share on social media.",
        "power": 3
      },
      "playerCards": [
        {
          "description": "I never share personal information on my social media accounts.",
          "power": 5
        },
        {
          "description": "I keep my accounts private so only my friends can see them.",
          "power": 4
        },
        {
          "description": "I tag everything so my friends always know what I’m doing.",
          "power": 1
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I watched you type your password and hacked your account.",
        "power": 2
      },
      "playerCards": [
        {
          "description": "I use different passwords for all of my other accounts.",
          "power": 4
        },
        {
          "description": "I changed my password on all of my accounts because they are the same.",
          "power": 2
        },
        {
          "description": "I deleted that account and started a new one.",
          "power": 1
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I looked at your browsing history on your phone to see what you do online.",
        "power": 2
      },
      "playerCards": [
        {
          "description": "I always use a private browser that never keeps my history.",
          "power": 4
        },
        {
          "description": "I set my browser to delete my history every time I quit.",
          "power": 3
        },
        {
          "description": "I never clear my browser history because I don’t like typing in big web addresses.",
          "power": 1
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I hacked your system and all your data is deleted now.",
        "power": 3
      },
      "playerCards": [
        {
          "description": "I never backed up my data in any way.",
          "power": 1
        },
        {
          "description": "I follow the 3-2-1 backup rule. I have on-site as well as off-site location (cloud storage) backup.",
          "power": 4
        },
        {
          "description": "I have my data backed up in local and external hard drive.",
          "power": 3
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I provided you my USB for content transfer.",
        "power": 2
      },
      "playerCards": [
        {
          "description": "I use Anti-Virus Protection & Firewall to protect my system.",
          "power": 4
        },
        {
          "description": "I refused to use your USB as my system was not having Anti-Virus Protection & Firewall.",
          "power": 3
        },
        {
          "description": "I used your USB as I am not afraid of my system getting corrupted.",
          "power": 1
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I will crash your vulnerable system using ransomware attacks, malware and data breaches.",
        "power": 2
      },
      "playerCards": [
        {
          "description": "You can't because I have turned on Automatic Updates for my operating system.",
          "power": 4
        },
        {
          "description": "I use web browsers such as Chrome or Firefox that receive frequent, automatic security updates.",
          "power": 3
        },
        {
          "description": "I don't update my software nor do I download security updates.",
          "power": 1
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I compromised your phone by getting you to install a fake app.",
        "power": 5
      },
      "playerCards": [
        {
          "description": "I only install apps from trusted sources like the official app store.",
          "power": 4
        },
        {
          "description": "I check app permissions before installing any app.",
          "power": 3
        },
        {
          "description": "I download apps from any website that offers them for free.",
          "power": 1
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I’m sending you a tempting pop-up ad full of malware.",
        "power": 5
      },
      "playerCards": [
        {
          "description": "I use an ad blocker to avoid seeing pop-up ads.",
          "power": 5
        },
        {
          "description": "I ignore pop-ups, but don’t take extra precautions.",
          "power": 4
        },
        {
          "description": "I clicked on the pop-up because the offer seemed great.",
          "power": 2
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I cracked your weak password in seconds.",
        "power": 3
      },
      "playerCards": [
        {
          "description": "I use a password manager to create strong, unique passwords for each account.",
          "power": 5
        },
        {
          "description": "I created a long password, but reuse it for several accounts.",
          "power": 3
        },
        {
          "description": "My password is my pet’s name and birthdate.",
          "power": 2
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I tricked you into downloading a malicious attachment from an email.",
        "power": 5
      },
      "playerCards": [
        {
          "description": "I open any email attachment as long as the email seems urgent.",
          "power": 2
        },
        {
          "description": "I scan all email attachments with antivirus software before opening.",
          "power": 5
        },
        {
          "description": "I only open attachments from people I know, but don’t scan them.",
          "power": 3
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I convinced you to share your personal information through a phishing website.",
        "power": 5
      },
      "playerCards": [
        {
          "description": "I always double-check URLs to ensure the website is legitimate.",
          "power": 5
        },
        {
          "description": "I entered my details because the site looked almost like the real one.",
          "power": 1
        },
        {
          "description": "I avoid entering personal information on suspicious-looking websites.",
          "power": 3
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I compromised your account through a brute force attack.",
        "power": 4
      },
      "playerCards": [
        {
          "description": "I use multi-factor authentication (MFA) on all my accounts.",
          "power": 5
        },
        {
          "description": "I have a strong password, but I don’t use MFA.",
          "power": 4
        },
        {
          "description": "My password is simple, so I don’t have trouble remembering it.",
          "power": 2
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I got access to your sensitive data because you left your device unlocked.",
        "power": 3
      },
      "playerCards": [
        {
          "description": "I rarely lock my device because I don’t think anyone will access it.",
          "power": 1
        },
        {
          "description": "I always lock my devices with a strong password or biometric authentication.",
          "power": 4
        },
        {
          "description": "I lock my device, but sometimes leave it unattended in public places.",
          "power": 3
        }
      ]
    },
    {
      "hackerCard": {
        "description": "I infiltrated your company's network using an unpatched vulnerability.",
        "power": 5
      },
      "playerCards": [
        {
          "description": "I ensure my system is always updated with the latest security patches.",
          "power": 5
        },
        {
          "description": "I sometimes delay applying security patches because they take time.",
          "power": 3
        },
        {
          "description": "I rarely update my system, so some vulnerabilities remain unpatched.",
          "power": 1
        }
      ]
    },
      {
        "hackerCard": {
          "description": "I created a fake online shopping website to steal your credit card details.",
          "power": 4
        },
        "playerCards": [
          {
            "description": "I only shop from websites that have secure payment methods and HTTPS.",
            "power": 5
          },
          {
            "description": "I’m cautious about shopping online but don’t always check security.",
            "power": 3
          },
          {
            "description": "I entered my payment information because the website had great deals.",
            "power": 1
          }
        ]
      },
      {
        "hackerCard": {
          "description": "I gained access to your work files because you used a personal device for work.",
          "power": 4
        },
        "playerCards": [
          {
            "description": "I frequently use personal devices for work without worrying about security.",
            "power": 1
          },
          {
            "description": "I use a secure, company-approved device for all work activities.",
            "power": 5
          },
          {
            "description": "I sometimes use my personal device for work but follow security best practices.",
            "power": 3
          }
        ]
      },
      {
        "hackerCard": {
          "description": "I accessed your private messages after your social media account was hacked.",
          "power": 4
        },
        "playerCards": [
          {
            "description": "I have strong, unique passwords for all my social media accounts.",
            "power": 5
          },
          {
            "description": "I use the same password for all my social media accounts.",
            "power": 1
          },
          {
            "description": "I rely on social media platforms’ security features but don’t take extra precautions.",
            "power": 2
          }
        ]
      },
      {
        "hackerCard": {
          "description": "I hijacked your webcam and microphone to spy on you.",
          "power": 4
        },
        "playerCards": [
          {
            "description": "I always cover my webcam and disable the microphone when not in use.",
            "power": 5
          },
          {
            "description": "I use software to manage my webcam and microphone settings but don't physically cover them.",
            "power": 3
          },
          {
            "description": "I never think about securing my webcam or microphone.",
            "power": 1
          }
        ]
      },

      {
        "hackerCard" : {
          "description" : "I tricked you into downloading an app disguised as an important system update.",
          "power" : 4,
        },
        "playerCards" : [
          {
            "description" : "I only download system updates directly from my device’s settings menu.",
            "power" : 5,
          },
          {
            "description" : "I check the source of updates, but I sometimes install them from emails or pop-ups.",
            "power" : 3,
          },
          {
            "description" : "I install updates from any source if they look legitimate.",
            "power" : 1,
          }
        ]
      },
      {
        "hackerCard": {
          "description": "I’m tracking your online activity with malicious browser cookies.",
          "power": 3
        },
        "playerCards": [
          {
            "description": "I regularly clear my cookies and use browser extensions to block tracking.",
            "power": 5
          },
          {
            "description": "I clear my cookies occasionally, but don’t actively block tracking.",
            "power": 3
          },
          {
            "description": "I never clear my cookies because it’s too inconvenient.",
            "power" : 1
          }
        ]
      },

      
      
        {
          "hackerCard" : {
            "description" : "I breached your company's database because you didn't encrypt sensitive information.",
            "power" : 4,
          },
          "playerCards" : [
            {
              "description" : "I always use strong encryption methods for all sensitive data.",
              "power" : 5,
            },
            {
              "description" : "I encrypt sensitive data but sometimes leave smaller data sets unprotected.",
              "power" : 3,
            },
            {
              "description" : "I rarely encrypt data because it's too time-consuming.",
              "power" : 1,
            }
          ]
        },
      
        {
          "hackerCard" : {
            "description" : "I accessed your device through a phishing SMS (smishing).",
            "power" : 3,
          },
          "playerCards" : [
            {
              "description" : "I never click on links from unknown senders, especially in text messages.",
              "power" : 5,
            },
            {
              "description" : "I click on links from senders I recognize but I avoid unknown senders.",
              "power" : 3,
            },
            {
              "description" : "I click on most links in texts if they look important.",
              "power" : 1,
            }
          ]
        },
      
        {
          "hackerCard" : {
            "description" : "I hijacked your cloud storage account because you reused your password from another site.",
            "power" : 4,
          },
          "playerCards" : [
            {
              "description" : "I use unique, complex passwords for each of my accounts.",
              "power" : 5,
            },
            {
              "description" : "I sometimes reuse passwords across different accounts.",
              "power" : 3,
            },
            {
              "description" : "I use the same password for almost all my accounts for convenience.",
              "power" : 1,
            }
          ]
        },
      
        {
          "hackerCard" : {
            "description" : "I used a drive-by download to install malware while you visited an insecure website.",
            "power" : 5,
          },
          "playerCards" : [
            {
              "description" : "I keep my browser security settings high and only visit trusted websites.",
              "power" : 5,
            },
            {
              "description" : "I visit a variety of websites, but I avoid downloading anything suspicious.",
              "power" : 3,
            },
            {
              "description" : "I visit any website, as long as it looks interesting.",
              "power" : 1,
            }
          ]
        },
      
        {
          "hackerCard" : {
            "description" : "I used your weak security questions to reset your account password.",
            "power" : 3,
          },
          "playerCards" : [
            {
              "description" : "I use strong, hard-to-guess security questions or answers unrelated to me.",
              "power" : 5,
            },
            {
              "description" : "I use common security questions, but I mix up the answers.",
              "power" : 3,
            },
            {
              "description" : "I use basic security questions like my pet’s name or my mother’s maiden name.",
              "power" : 1,
            }
          ]
        },
      
        {
          "hackerCard" : {
            "description" : "I gained access to your company’s internal network through an unsecure IoT device.",
            "power" : 4,
          },
          "playerCards" : [
            {
              "description" : "I ensure that all IoT devices are secured with strong passwords and regular updates.",
              "power" : 5,
            },
            {
              "description" : "I secure most IoT devices, but some are left with default settings.",
              "power" : 3,
            },
            {
              "description" : "I rarely secure IoT devices and use default passwords.",
              "power" : 1,
            }
          ]
        },
      
        {
          "hackerCard" : {
            "description" : "I tricked you into connecting your device to my rogue Bluetooth hotspot.",
            "power" : 4,
          },
          "playerCards" : [
            {
              "description" : "I only connect to trusted Bluetooth devices and networks.",
              "power" : 5,
            },
            {
              "description" : "I connect to Bluetooth devices, but I check for suspicious names.",
              "power" : 3,
            },
            {
              "description" : "I connect to any available Bluetooth device without checking.",
              "power" : 1,
            }
          ]
        },
        
          {
            "hackerCard" : {
              "description" : "I took control of your device using an unpatched vulnerability.",
              "power" : 5,
            },
            "playerCards" : [
              {
                "description" : "I keep my software updated to fix security vulnerabilities.",
                "power" : 5,
              },
              {
                "description" : "I update my software occasionally but often delay installing updates.",
                "power" : 3,
              },
              {
                "description" : "I rarely update my software unless something stops working.",
                "power" : 1,
              }
            ]
          },
        
          {
            "hackerCard" : {
              "description" : "I launched a successful Man-in-the-Middle (MitM) attack on you while you were on public Wi-Fi.",
              "power" : 4,
            },
            "playerCards" : [
              {
                "description" : "I always use a VPN when connecting to public Wi-Fi networks.",
                "power" : 5,
              },
              {
                "description" : "I avoid sensitive activities on public Wi-Fi but don’t use a VPN.",
                "power" : 3,
              },
              {
                "description" : "I frequently use public Wi-Fi for all my online activities without protection.",
                "power" : 1,
              }
            ]
          },
        
          {
            "hackerCard" : {
              "description" : "I used social engineering to convince your colleague to share their login credentials.",
              "power" : 3,
            },
            "playerCards" : [
              {
                "description" : "I educate my colleagues about social engineering and phishing scams regularly.",
                "power" : 5,
              },
              {
                "description" : "I remind my colleagues occasionally about phishing, but not regularly.",
                "power" : 3,
              },
              {
                "description" : "I assume my colleagues know enough about security and don't need reminders.",
                "power" : 1,
              }
            ]
          },
        
          {
            "hackerCard" : {
              "description" : "I infected your system with ransomware because you didn’t have a backup of your data.",
              "power" : 5,
            },
            "playerCards" : [
              {
                "description" : "I regularly back up my data using secure, offsite storage solutions.",
                "power" : 5,
              },
              {
                "description" : "I occasionally back up my important data but don’t have a set schedule.",
                "power" : 3,
              },
              {
                "description" : "I rarely back up my data and rely on my main system’s storage.",
                "power" : 1,
              }
            ]
          },
        
          {
            "hackerCard" : {
              "description" : "I accessed your account because you disabled two-factor authentication (2FA).",
              "power" : 4,
            },
            "playerCards" : [
              {
                "description" : "I use two-factor authentication for all my important accounts.",
                "power" : 5,
              },
              {
                "description" : "I use two-factor authentication for some accounts, but not all.",
                "power" : 3,
              },
              {
                "description" : "I don’t use two-factor authentication because it’s inconvenient.",
                "power" : 1,
              }
            ]
          },
        
          {
            "hackerCard" : {
              "description" : "I stole your private data because you didn’t encrypt your USB drive.",
              "power" : 3,
            },
            "playerCards" : [
              {
                "description" : "I always encrypt my external drives to protect sensitive data.",
                "power" : 5,
              },
              {
                "description" : "I encrypt my external drives only if I’m storing highly sensitive data.",
                "power" : 3,
              },
              {
                "description" : "I don’t encrypt my USB drives because I don’t think it’s necessary.",
                "power" : 1,
              }
            ]
          },
        
          {
            "hackerCard" : {
              "description" : "I breached your company’s network because your firewall rules were too lenient.",
              "power" : 4,
            },
            "playerCards" : [
              {
                "description" : "I configure strong firewall rules and review them regularly.",
                "power" : 5,
              },
              {
                "description" : "I use default firewall settings but make minor adjustments occasionally.",
                "power" : 3,
              },
              {
                "description" : "I rely on basic firewall settings and rarely review or update them.",
                "power" : 1,
              }
            ]
          },
        
          {
            "hackerCard" : {
              "description" : "I phished your employees with a fake email from the CEO asking for financial data.",
              "power" : 4,
            },
            "playerCards" : [
              {
                "description" : "I educate employees about phishing scams, especially spear phishing.",
                "power" : 5,
              },
              {
                "description" : "I give employees general security tips but don’t focus on phishing specifically.",
                "power" : 3,
              },
              {
                "description" : "I assume my employees are savvy enough to avoid phishing without extra training.",
                "power" : 1,
              }
            ]
          },
        
          {
            "hackerCard" : {
              "description" : "I leveraged a zero-day vulnerability to access your organization’s network.",
              "power" : 5,
            },
            "playerCards" : [
              {
                "description" : "I implement security patches as soon as they are released and monitor for zero-days.",
                "power" : 5,
              },
              {
                "description" : "I apply security patches regularly, but occasionally delay zero-day updates.",
                "power" : 3,
              },
              {
                "description" : "I wait for stable versions of patches, even if it takes a while.",
                "power" : 1,
              }
            ]
          },
        
          {
            "hackerCard" : {
              "description" : "I captured your passwords by making you reuse them across multiple accounts.",
              "power" : 3,
            },
            "playerCards" : [
              {
                "description" : "I use a password manager to generate and store unique passwords for all accounts.",
                "power" : 5,
              },
              {
                "description" : "I reuse passwords for non-critical accounts but make sure to secure important ones.",
                "power" : 3,
              },
              {
                "description" : "I reuse passwords across many accounts because it’s easier to remember.",
                "power" : 1,
              }
            ]
          }
];